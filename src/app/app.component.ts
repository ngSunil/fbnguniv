import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    var config = {
      apiKey: "AIzaSyATNsOiksAFNpb16uVl0rph04kftHh792c",
      authDomain: "brilliant-heat-7043.firebaseapp.com",
      databaseURL: "https://brilliant-heat-7043.firebaseio.com",
      storageBucket: "brilliant-heat-7043.appspot.com",
      messagingSenderId: "115520029876"
    };
  initializeApp(config);
  var root=database().ref('messages/2/');
  root.on('value', function(snap){
  console.log(snap.key, snap.val());
  })
  }
}
