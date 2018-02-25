import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MyShelfService {
  bookShelfData: any;
  myShelfList$: Observable<any>;
  public myShelfData = new Subject<any>();
  myShelfDataArray = [];

  constructor() {
    this.myShelfList$ = this.myShelfData.asObservable();
  }
  myShelfList(data) {
    console.log(data);
    this.myShelfDataArray.push(data);
    this.myShelfData.next(this.myShelfDataArray.length);
  }

  booksInMyShelf() {
    return this.myShelfDataArray;
  }

}
