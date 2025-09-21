import { Challenges } from './challenges';
import { Implementation } from './implementation';
import { Learning } from './learning';
import { Technology } from './technology';

export interface Project {
  id: number;
  frontPage: string[];
  title: string;
  shortDescription: string;
  github: string;
  youtube: string;
  longDescription: string;
  technologies: Technology[];
  learnings: Learning[];
  challenges: Challenges[];
  implementations: Implementation[];
  gallery?:string[];
}
