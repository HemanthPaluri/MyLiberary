import { Component, OnInit } from '@angular/core';
import { MyShelfService } from '../core/my-shelf.service';

@Component({
  selector: 'app-books-cart',
  templateUrl: './books-cart.component.html',
  styleUrls: ['./books-cart.component.css']
})
export class BooksCartComponent implements OnInit {
  cartBooksData: any;

  constructor(private addedCardData: MyShelfService ) { }

  ngOnInit() {
    this.cartBooksData = this.addedCardData.booksInMyShelf();
    console.log(this.cartBooksData);
    // .subscribe(data => {
    //   this.cartBooksData = data;
    //   console.log(this.cartBooksData +" from my cart page");
    // });
  }

}
