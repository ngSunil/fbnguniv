import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonsService } from '../shared/model/lessons.service';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';
@Component({
  selector: 'lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  lesson: Lesson;
  constructor(private router: Router, private route: ActivatedRoute, private lessonsService: LessonsService) {

   }

  ngOnInit() {
    this.route.params.switchMap(params =>{
      const lessonUrl = params['id'];
      return this.lessonsService.findLessonsByUrl(lessonUrl);
    }).subscribe(lesson => this.lesson=lesson);
  }
  next(){
    this.lessonsService.loadNextLesson(this.lesson.courseId, this.lesson.$key)
        .subscribe(lesson => this.router.navigate(['lesson', lesson.url]));
  }
  previous(){
    this.lessonsService.loadPreviousLesson(this.lesson.courseId, this.lesson.$key)
        .subscribe(lesson => this.router.navigate(['lesson', lesson.url]));
  }
}
