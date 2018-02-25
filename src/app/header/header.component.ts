import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../core/auth.service';
import { MyShelfService } from '../core/my-shelf.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: any;
  userAvatar: any;
  booksInShelfCount: any;
  booksData: any;

   constructor(public authService: AuthService, private myShelfService: MyShelfService, private router: Router) {
    }

  ngOnInit() {
    this.myShelfService.myShelfData.subscribe(data => {
      console.log(data);
      this.booksInShelfCount = data;
    });
  }

   logout() {
     this.authService.logout();
   }

  updateHeaderSelf() {
    // this.myShelfService.myShelfList$.subscribe((data) => {
    //   this.booksInShelfCount = data;
    //   console.log('from Header Component:' + this.booksInShelfCount);
    // });
  }

  myCart() {
    if (this.booksInShelfCount > 0) {
      this.router.navigateByUrl('/cart');
    }else {
      alert(" no items in cart ");
    }
  }
}
