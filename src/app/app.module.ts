import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
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
@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    HomeComponent,
    LessonsListComponent,
    TopMenuComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [LessonsService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
