import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'blogPage/:title',
    component: BlogPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
