export class BooksModel {
  title: string;
  author: string;
  url: string;
  Availability: Availability;

  constructor(_title: string, _author: string, _url: string) {
      this.title = _title;
      this.author = _author;
      this.url = _url;
  }

}

export class Availability {
  status: string;
  NoOFCopies: number;

  constructor(_status: string, _NoOFCopies: number) {
      this.status = _status;
      this.NoOFCopies = _NoOFCopies;
  }
}
