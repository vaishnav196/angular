import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:HomepageComponent,
    path:''
  },
  {
    component:UserComponent,
    path:'user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
