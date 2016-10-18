import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent {
  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseObjectObservable<any>;
  displayDate = new Date().toLocaleDateString();
  constructor(private af: AngularFire){
    //Firebase List Observable
    this.courses$ =  af.database.list('courses');
    this.courses$.subscribe(val => console.log(val));
    //Firebase Object Observable
    this.lesson$ = af.database.object('lessons/-KUISGqbO1_QgcahZuiS');
    this.lesson$.subscribe(console.log);
  }
  listPush(){
    this.courses$.push({description: 'My test Course', time: this.displayDate})
      .then(
        ()=>console.log('List Push Done'),
        console.error
      );
  }

}
