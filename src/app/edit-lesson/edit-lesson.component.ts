import { LessonsService } from './../shared/model/lessons.service';
import { Lesson } from './../shared/model/lesson';
import { routerConfig } from './../router.config';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private lessonsService: LessonsService) { 
   
  }

  ngOnInit() {
  }
  
}
