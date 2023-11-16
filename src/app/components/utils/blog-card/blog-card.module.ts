import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BlogCardComponent } from './blog-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,

  ],
  exports: [
    BlogCardComponent
  ]
})
export class BlogCardModule { }
