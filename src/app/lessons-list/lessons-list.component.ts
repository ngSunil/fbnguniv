import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
  @Input()
  lessons: Lesson[];
  constructor() { }
  @Output('lesson')
  lessonEmitter = new EventEmitter<Lesson>();
  ngOnInit() {
  }
  selectLesson(lesson: Lesson){
    this.lessonEmitter.emit(lesson);
  }
}
