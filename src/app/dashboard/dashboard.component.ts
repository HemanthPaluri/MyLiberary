import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../core/auth.service';
import { Url } from 'url';

import { BooksDataService } from '../core/books-data.service';
import { BooksModel } from '../core/Model/BooksModel';

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

  constructor(private bookDataService: BooksDataService) {}
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
  addBook(event) {
    console.log(event);
  }
}
