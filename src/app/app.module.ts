import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';
import { AngularFireModule } from 'angularfire2/index';
import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/firebase.config';
import { FirebaseComponent } from './firebase/firebase.component';
import { HomeComponent } from './home/home.component';
import { LessonsService } from './shared/model/lessons.service';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { routerConfig } from './router.config';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './shared/model/courses.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { SafeUrlPipe } from './shared/security/safe-url.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NewLessonComponent } from './new-lesson/new-lesson.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    HomeComponent,
    LessonsListComponent,
    TopMenuComponent,
    CoursesComponent,
    CourseDetailComponent,
    LessonDetailComponent,
    SafeUrlPipe,
    NewLessonComponent,
    LessonFormComponent,
    EditLessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig), ReactiveFormsModule 
  ],
  providers: [LessonsService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
