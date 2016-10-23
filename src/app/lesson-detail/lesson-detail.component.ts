import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../shared/model/lessons.service';
import { Lesson } from '../shared/model/lesson';
@Component({
  selector: 'lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  lesson: Lesson;
  constructor(private route: ActivatedRoute, private lessonsService: LessonsService) { }

  ngOnInit() {
    const lessonUrl=this.route.snapshot.params['id'];
    this.lessonsService.findLessonsByUrl(lessonUrl)
    .do(console.log)
          .subscribe(lesson => this.lesson=lesson);
  }
}
