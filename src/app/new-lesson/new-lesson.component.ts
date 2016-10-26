import { LessonsService } from './../shared/model/lessons.service';
import { Lesson } from './../shared/model/lesson';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrls: ['./new-lesson.component.css']
})
export class NewLessonComponent implements OnInit {
  courseId: string;
  lesson: Lesson;
  constructor(private route: ActivatedRoute, private lessonsService: LessonsService) { }

  ngOnInit() {
    this.courseId = this.route.snapshot.queryParams['courseId'];
    console.log("course", this.courseId);
  }
  save(form){
    this.lessonsService.saveNewLesson(this.courseId, form.value)
      .subscribe(
        () => {
          alert("lesson created succesfully. Create another Lesson?");
          form.reset();
        },
        err => alert(`error saving lesson ${err}`)
      );
  }
}
