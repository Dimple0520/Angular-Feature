import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: any[] = [
    {
      ID: 2,
      Name: 'A Time to Kill',
      Author: 'John Grishman',
      ISBN: '1989'

    },

    {
      ID: 3,
      Name: 'The House of Mirth',
      Author: 'Edith Wharton',
      ISBN: '1952'

    },

    {
      ID: 4,
      Name: 'East of Eden',
      Author: 'John Steinbeck',
      ISBN: '1952'

    },

    {
      ID: 6,
      Name: 'The Sun also Rises',
      Author: 'Ernest Hemingway',
      ISBN: '1926'

    },

    {
      ID: 7,
      Name: 'A Scanner Darkly',
      Author: 'Philip K. Dick',
      ISBN: '1977'

    }

  ];

  constructor() {}

  getBooks(){
    return this.books
  }
}