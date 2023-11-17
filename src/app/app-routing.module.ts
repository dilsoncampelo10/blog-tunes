import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowPostComponent } from './pages/posts/show-post/show-post.component';
import { CreatePostComponent } from './pages/posts/create-post/create-post.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'post/show/:id',
    component:ShowPostComponent
  },
  {
    path:'post/create',
    component:CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
