import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { Course } from './course';
import { Lesson } from './Lesson';

@Injectable()
export class CoursesService {
  
  constructor(private af: AngularFire, private db: AngularFireDatabase) { }
  findAllCourses(): Observable<Course[]>{
    // return this.af.database.list('courses').map(Course.fromJsonArray);
    return this.db.list('courses').map(Course.fromJsonArray);
  }
  findCourseByUrl(courseUrl:string): Observable<Course>{
    return this.db.list('courses', {
      query:{
        orderByChild: 'url',
        equalTo: courseUrl
      }
    }).map(results => results[0]);
  }
  findLessonKeysPerCourseUrl(courseUrl: string): Observable<Lesson[]>{
    return this.findCourseByUrl(courseUrl)
                .switchMap(course => this.db.list(`lessonsPerCourse/${course.$key}`))
                .map(lspc => lspc.map(lpc => lpc.$key));
  }
  findLessonsforCourse(courseUrl: string): Observable<Lesson[]>{
    return this.findLessonKeysPerCourseUrl(courseUrl)
            .map(lspc=>lspc.map(lessonKey => this.db.object("lessons/"+lessonKey)))
            .flatMap(fbojs => Observable.combineLatest(fbojs));
  }
  loadFirstLessonsPage(courseUrl:string):Observable<Lesson[]>{

    return Observable.of([]);
  }
}
