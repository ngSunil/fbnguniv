import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/model/courses.service';
import { Lesson } from '../shared/model/Lesson';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  lesson$: Observable<Lesson[]>
  constructor(private route: ActivatedRoute ,private coursesService: CoursesService) { }

  ngOnInit() {
    const courseUrl= this.route.snapshot.params['id'];
    this.coursesService.findLessonsforCourse(courseUrl);
  }
}