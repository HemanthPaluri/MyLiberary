import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../core/auth.service';
import { Url } from 'url';

import { BooksDataService } from '../core/books-data.service';
import { BooksModel } from '../core/Model/BooksModel';

import { MyShelfService } from '../core/my-shelf.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: any;
  userAvatar: any;

  booksData: BooksModel[] = [];
  errorMessage: string;
  selectedBook: any;
  constructor(private bookDataService: BooksDataService, private myShelfService: MyShelfService) {}
  // logout() {
  //   this.authService.logout();
  // }
  ngOnInit() {
    // this.username = this.authService.currentUserId;
    // this.userAvatar = this.authService.currentUserAvatar;
    this.getLiberaryData();
  }

  getLiberaryData() {
    this.bookDataService.getBooksList().subscribe(
      books => {
        this.booksData = books;
        window.localStorage.setItem('liberaryBookData' , JSON.stringify(books));
     },
      error => {this.errorMessage = error }
    );
  }

  // tslint:disable-next-line:member-ordering
  constructBooksList = JSON.parse(window.localStorage.getItem('liberaryBookData')).booksList;

  //
  addBook(event) {
    console.log(event);
    this.selectedBook = event;
    this.myShelfService.myShelfList(this.selectedBook);
    // let headerObj = new HeaderComponent(this.myShelfService);
    // headerObj.updateHeaderSelf()
  }
}
