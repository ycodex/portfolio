import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  constructor() {}
  pdfSrc = '../../assets/Karthik_K.pdf';
  ngOnInit(): void {}
}
