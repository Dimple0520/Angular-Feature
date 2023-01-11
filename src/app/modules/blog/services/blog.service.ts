import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: any[] = [
    {
      ID: 31,
      Title: 'Make My Life Easier',
      Description: 'Best way to do something',
      Author: 'Greatest Bell',
      ISBN: '2000'

    },

    {
      ID: 19,
      Title: 'If I Were You',
      Description: 'Desire to Improve',
      Author: 'Kate Marasigan',
      ISBN: '2019'

    },

    {
      ID: 17,
      Title: 'Infographic',
      Description: 'New Technology Trend',
      Author: 'Mydee Lasquite',
      ISBN: '2015'

    }

  ];

  constructor() {}

  getBlogs(){
    return this.blogs
  }
}