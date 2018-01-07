import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import {Observable} from 'rxjs/Rx';
import {BooksModel} from './Model/BooksModel';

@Injectable()
export class BooksDataService {

  constructor(private http: Http) { }

  getBooksList(): Observable<BooksModel[]> {
    return this.http.get('./assets/Data/books-data.json', {headers: this.getHeaders()} )
    .map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'server error'));
    // .map((res:Response) => res.json());
  }

  private getHeaders() {
    const headers = new Headers();
    headers.append('ACCEPT', 'application/json');
    return headers;
  }

}
