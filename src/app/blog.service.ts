import { Injectable } from '@angular/core';
import { Blog } from 'src/blog';
import { listFiles } from 'list-files-in-dir';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blog1: Blog[] = [
    {
      title: 'Test blog-1',
      date: '14-08-2021',
    },
    {
      title: 'Test blog-2',
      date: '13-08-2021',
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
  private http: HttpClient;
  articles: string;
  constructor(httpCient: HttpClient) {
    this.http = httpCient;
    // this.http
    //   .get('assets/article.txt', { responseType: 'text' })
    //   .subscribe((data) => {
    //     this.articles = data;
    //     console.log(this.articles);
    //   });
  }
  getArticles() {
    console.log(this.articles);
    return this.articles;
  }
}
