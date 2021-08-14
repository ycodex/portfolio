import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/blog';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor() {}
  blog1: Blog = {
    title: 'Test1',
    date: Date.now(),
    Description: 'wassup',
  };
  blog2: Blog = {
    title: 'Test2',
    date: Date.now(),
    Description: 'wassup',
  };
  blog3: Blog = {
    title: 'Test3',
    date: Date.now(),
    Description: 'wassup',
  };
  blogs: Blog[] = [this.blog1, this.blog2, this.blog3];
  ngOnInit(): void {}
}
