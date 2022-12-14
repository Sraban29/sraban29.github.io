import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/aboutMe',
    pathMatch: 'full'
  },
  {
    path:'aboutMe',
    component: AboutMeComponent  
  },
  {
    path:'resume',
    component: ResumeComponent  
  },
  {
    path:'projects',
    component: ProjectsComponent  
  },
  {
    path:'contact',
    component: ContactComponent  
  },
  {
    path:'404',
    component: NotFoundComponent
  },
  {
    path: '**', redirectTo:'/404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
