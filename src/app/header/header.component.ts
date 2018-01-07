import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: any;
  userAvatar: any;

  constructor(public authService: AuthService) { }
  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
