import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Lesson } from './lesson';
import { AngularFire } from 'angularfire2';
@Injectable()
export class LessonsService {

  constructor(private af: AngularFire) {}
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
}
