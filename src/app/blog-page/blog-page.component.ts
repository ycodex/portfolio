import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
})
export class BlogPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  blogTitle: string = this.route.snapshot.paramMap.get('title');
  blog: Blog = this.blogService.getBlogByTitle(this.blogTitle);
  ngOnInit(): void {}
}
