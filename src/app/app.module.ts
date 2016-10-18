import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2/index';
import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/firebase.config';
import { FirebaseComponent } from './firebase/firebase.component';
@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
