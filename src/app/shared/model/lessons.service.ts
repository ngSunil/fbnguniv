import { database } from 'firebase';

import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Lesson } from './lesson';
import { AngularFire, FirebaseRef } from 'angularfire2';
@Injectable()
export class LessonsService {
  sdkDb:any;
  constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
    this.sdkDb=fb.database().ref();
  }
  findallLessons(): Observable<Lesson[]>{
    return this.af.database.list('lessons')
              .do(console.log)
              .map(Lesson.fromJsonList);
  }
  findLessonsByUrl(url: string): Observable<Lesson>{
    return this.af.database.list('lessons', {
      query: {
        orderByChild: 'url',
        equalTo: url
      }
    })
      .map(results => Lesson.fromJson(results[0]));
  }
  loadNextLesson(courseId: string, lessonId: string): Observable<Lesson>{
    return this.af.database.list(`lessonsPerCourse/${courseId}`, {
      query:{
        orderByKey: true,
        startAt: lessonId,
        limitToFirst: 2
      }
    })
    .map(results => results[1].$key)
    .switchMap(lessonId => this.af.database.object(`lessons/${lessonId}`))
    .map(Lesson.fromJson)
  }
  loadPreviousLesson(courseId: string, lessonId: string){
      return this.af.database.list(`lessonsPerCourse/${courseId}`, {
      query:{
        orderByKey: true,
        endAt: lessonId,
        limitToLast: 2
      }
    })
    .map(results => results[0].$key)
    .switchMap(lessonId => this.af.database.object(`lessons/${lessonId}`))
    .map(Lesson.fromJson)
  }

  saveNewLesson(courseId:string, lesson:any):Observable<any>{
    const lessonsToSave=Object.assign({}, lesson, {courseId});
    const newLessonKey = this.sdkDb.child('lessons').push().key;
    let dataToSave={};
    dataToSave["lessons/" + newLessonKey] =lessonsToSave;
    dataToSave[`lessonsPerCourse/${courseId}/${newLessonKey}`] = true;
    return this.firebaseUpdate(dataToSave);
  }
  firebaseUpdate(dataToSave){
    const subject = new Subject();
    this.sdkDb.update(dataToSave)
      .then(
        val => {
          subject.next(val);
          subject.complete();
        },
        err =>{
          subject.error(err);
          subject.complete();
        }
      )
      return subject.asObservable();
  }
}
