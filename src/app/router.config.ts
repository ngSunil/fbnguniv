import { NewLessonComponent } from './new-lesson/new-lesson.component';
import { Lesson } from './shared/model/lesson';
import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
export const routerConfig: Route[]=[
   {
       path:'home', component: HomeComponent
   } ,
   {
       path:'courses',
       children:[
           {path:'', component: CourseDetailComponent},
           {path:'new', component: NewLessonComponent}
       ]
   },
   {
       path: 'lessons/:id',
       component: LessonDetailComponent
   },
   {
       path:'', redirectTo: 'home', pathMatch: 'full'
   },
   {
       path:'**', redirectTo: 'home'
   }
] 