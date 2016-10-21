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
  findLessonsforCourse(courseUrl: string): Observable<Lesson[]>{
    const course$ = this.findCourseByUrl(courseUrl);
    const lessonsPerCourse$ = course$.switchMap(course => this.db.list("lessonsPerCourse/"+course.$key))
                                .do(console.log);
    lessonsPerCourse$.subscribe();
    return Observable.of([]);
  }
}
