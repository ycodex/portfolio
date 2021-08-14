import { Injectable } from '@angular/core';
import { Blog } from 'src/blog';
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blog1: Blog[] = [
    {
      title: 'Test blog-1',
      date: '14-08-2021',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum sed sem et fermentum. Praesent facilisis purus quis lacus interdum interdum. Ut aliquet purus magna, in dignissim velit tincidunt ac. Donec dapibus nibh felis, sit amet sodales nulla egestas nec. Mauris posuere, lectus ac tempor rhoncus, arcu nunc pellentesque arcu, a suscipit nisl tortor at orci. Vivamus vel ex at neque accumsan facilisis. Vestibulum turpis odio, euismod id purus eget, eleifend lacinia purus. Etiam in nisl vitae dolor blandit fringilla ac et metus. Phasellus in augue urna.',
    },
    {
      title: 'Test blog-2',
      date: '13-08-2021',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum sed sem et fermentum. Praesent facilisis purus quis lacus interdum interdum. Ut aliquet purus magna, in dignissim velit tincidunt ac. Donec dapibus nibh felis, sit amet sodales nulla egestas nec. Mauris posuere, lectus ac tempor rhoncus, arcu nunc pellentesque arcu, a suscipit nisl tortor at orci. Vivamus vel ex at neque accumsan facilisis. Vestibulum turpis odio, euismod id purus eget, eleifend lacinia purus. Etiam in nisl vitae dolor blandit fringilla ac et metus. Phasellus in augue urna.',
    },
  ];

  blogs: Blog[] = this.blog1;
  getAllBlogs(): Blog[] {
    return this.blogs;
  }
  getBlogByTitle(title: string) {
    for (let blog of this.blogs) {
      if (blog.title.match(title)) {
        return blog;
      }
    }
  }
  constructor() {}
}
