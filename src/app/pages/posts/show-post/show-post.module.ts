import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ShowPostComponent } from './show-post.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  declarations: [ShowPostComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule
  ]
})
export class ShowPostModule { }
