import { Component, OnInit } from '@angular/core';

import { Home } from 'src/configurations-assets/home';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  // ycodex: Home = {
  //   name: 'Karthik K',
  //   skills: [
  //     'Java, Python, C++',
  //     'Spring boot, Spring MVC basically Spring framework',
  //     'Docker',
  //     'AWS, CICD',
  //     'Angular',
  //   ],
  //   projects: ['Pension management system', 'Portfolio website'],
  // };
  ngOnInit(): void {}
  ycodex: Home = this.homeService.getDetails();
}
