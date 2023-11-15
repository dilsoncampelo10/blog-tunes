import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from 'src/app/components/utils/blog-card/blog-card.component';
import { HomeComponent } from './home.component';
import { BlogCardModule } from 'src/app/components/utils/blog-card/blog-card.module';



@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    BlogCardModule
  ],
  exports: [
    HomeComponent,

  ]
})
export class HomeModule { }
