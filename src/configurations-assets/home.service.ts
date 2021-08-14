import { Home } from './home';
export class HomeService {
  ycodex: Home = {
    name: 'Karthik K',
    skills: ['Java', 'SpringBoot', 'Python'],
    projects: ['Pension management system', 'Portfolio website'],
  };
  getDetails(): Home {
    return this.ycodex;
  }
}
