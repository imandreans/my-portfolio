import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './project/project.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project', component: ProjectsComponent },
];
