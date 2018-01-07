import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }


  // login() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  // logout() {
  //   this.afAuth.auth.signOut();
  // }

  ngOnInit() {
  }
}
