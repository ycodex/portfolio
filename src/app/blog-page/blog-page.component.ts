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
  link: string = '../../assets/articles/' + this.blogTitle + '.md';

  // for await (const filename of getAllFiles(`path/to/dir/or/file`)) {
  //   // Could break early on some condition and get-all-files
  //   // won't have unnecessarily accumulated the filenames in an array
  //   console.log(filename)
  // }

  blog: Blog = this.blogService.getBlogByTitle(this.blogTitle);
  ngOnInit(): void {}
}
