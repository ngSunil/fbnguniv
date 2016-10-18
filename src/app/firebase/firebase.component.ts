import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {Observable} from 'rxjs/Rx';
 import 'rxjs/add/operator/map';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent {
  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseObjectObservable<any>;
  displayDate = new Date().toLocaleDateString();
  firstcourse:any;
  constructor(private af: AngularFire){
    //Firebase List Observable
    this.courses$ =  af.database.list('courses');
    this.courses$.subscribe(val => console.log(val));
    //Firebase Object Observable
    this.lesson$ = af.database.object('lessons/-KUISGqbO1_QgcahZuiS');
    this.lesson$.subscribe(console.log);

    this.courses$.map(courses => courses[0])
              .subscribe(course =>this.firstcourse=course);
  }
  listPush(){
    this.courses$.push({description: 'My test Course', time: this.displayDate})
      .then(
        ()=>console.log('List Push Done'),
        console.error
      );
  }
  listRemove(){
    this.courses$.remove(this.firstcourse);
  }
  listUpdate(){
    this.courses$.update(this.firstcourse, {description: 'Update value 2nd time'});
  }
  objectUpdate(){
    this.lesson$.update({description: 'Update this lesson description'})
  }
  objectSet(){
    this.lesson$.set({description: 'Update this lesson description'})
  }
  objectRemove(){
    this.lesson$.remove();
  }
}
