import { Injectable } from '@angular/core';
import { Home, Link } from 'src/configurations-assets/home';
import { Project } from 'src/configurations-assets/projects';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  //Projects
  projects: Project[] = [
    {
      name: 'Pension Management System',
      link: 'https://github.com/ycodex/MFPE',
      description: 'Built using Spring boot and Spring MVC',
    },
    {
      name: 'Portfolio Website',
      link: 'https://github.com/ycodex/portfolio',
      description: 'Built using Angular framework',
    },
    {
      name: 'Twitter Bot',
      link: 'https://github.com/ycodex/Twitter_bot',
      description: 'updates corona count in twitter',
    },
    {
      name: 'Image Super reslution',
      link: '#',
      description: 'Using GANS model converts low res to high res',
    },
  ];

  //Links
  links: Link[] = [
    {
      name: 'Github',
      link: 'https://github.com/ycodex/',
    },
    {
      name: 'Linkdin',
      link: 'https://www.linkedin.com/in/karthik-k-378158157/',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/ycodex',
    },
  ];

  ycodex: Home = {
    name: 'Karthik K',
    skills: [
      'Java, Python, C++',
      'Spring boot, Spring MVC basically Spring framework',
      'Docker',
      'AWS, CICD',
      'Angular',
    ],
    projects: this.projects,
    links: this.links,
  };
  getDetails(): Home {
    return this.ycodex;
  }
}
