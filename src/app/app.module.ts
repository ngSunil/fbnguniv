import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { AngularFireModule } from 'angularfire2/index';
import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/firebase.config';
import { FirebaseComponent } from './firebase/firebase.component';
import { HomeComponent } from './home/home.component';
import { LessonsService } from './shared/model/lessons.service';
@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
