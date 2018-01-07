import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  authState: firebase.User;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe (auth => {
      this.authState = auth;
    });
  }

  // true when user logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
      // if (this.authenticated) {
        this.router.navigateByUrl('/dashboard');
     // }
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      // if (!this.authenticated) {
        this.router.navigateByUrl('/login');
     // }
    });
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.displayName : "Gest";
  }

  get currentUserAvatar (): string {
    return this.authenticated ? this.authState.photoURL : "";
  }
  get currentUserEmailId (): string {
    return this.authenticated ? this.authState.email : "";

  }

  get currentUserObservable(): any {
    return this.afAuth.authState;
  }
}
