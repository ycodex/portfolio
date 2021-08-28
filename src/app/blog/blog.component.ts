import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/blog';
import { BlogService } from '../blog.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  http: HttpClient;
  public articles: Blog[] = [];
  constructor(private blogService: BlogService, httpClient: HttpClient) {
    this.http = httpClient;
    this.http
      .get('../../assets/article.csv', { responseType: 'text' })
      .subscribe(
        (data) => {
          let csvToRowArray = data.split('\n');
          for (let index = 1; index < csvToRowArray.length; index++) {
            let row = csvToRowArray[index].split(',');
            this.articles.push(new Blog(row[0], row[1]));
          }
          console.log(this.articles);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  blogs: Blog[] = this.blogService.getAllBlogs();

  ngOnInit(): void {}
}
