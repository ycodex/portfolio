import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/blog';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor(private blogService: BlogService) {}
  blogs: Blog[] = this.blogService.getAllBlogs();
  ngOnInit(): void {}
}
