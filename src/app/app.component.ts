import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private af: AngularFire){
    //Firebase List Observable
    const courses$: FirebaseListObservable<any> =  af.database.list('courses');
    courses$.subscribe(val => console.log(val));
    //Firebase Object Observable
    const course$: FirebaseObjectObservable<any> = af.database.object('courses/-KUISGqC2rJyMvGuuJwc');
    course$.subscribe(console.log);
  }
}
