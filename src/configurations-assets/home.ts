import { Project } from './projects';

export interface Home {
  name: string;
  skills: string[];
  projects: Project[];
  links: Link[];
}
export interface Link {
  name: string;
  link: string;
}
