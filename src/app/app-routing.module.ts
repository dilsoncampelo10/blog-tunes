import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowComponent } from './pages/posts/show/show.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'post/show/:id',
    component:ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
