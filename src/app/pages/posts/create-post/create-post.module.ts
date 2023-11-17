import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post.component';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
})
export class CreatePostModule { }
