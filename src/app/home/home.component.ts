import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/configurations-assets/home.service';
import { Home } from 'src/configurations-assets/home';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
