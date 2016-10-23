import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/model/courses.service';
import { Lesson } from '../shared/model/Lesson';
import { Course } from '../shared/model/course';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseUrl: string;
  course$: Observable<Course>;
  lessons: Lesson[];
  constructor(private route: ActivatedRoute ,private coursesService: CoursesService) { }

  ngOnInit() {
    this.courseUrl= this.route.snapshot.params['id'];
    this.course$ = this.coursesService.findCourseByUrl(this.courseUrl);
    const lessons$ = this.coursesService.loadFirstLessonsPage(this.courseUrl, 3);
    lessons$.subscribe(lessons => this.lessons=lessons);
    // this.lessons$ = this.coursesService.findLessonsforCourse(courseUrl);
    // this.lessons$.do(console.log).subscribe();
  }
  next(){
    this.coursesService.loadNextPage(this.courseUrl, this.lessons[this.lessons.length-1].$key, 3)
            .subscribe(lessons => this.lessons=lessons);
  }
  previous(){
    this.coursesService.loadPreviousPage(this.courseUrl, this.lessons[0].$key, 3)
            .subscribe(lessons => this.lessons=lessons);
  }
}
