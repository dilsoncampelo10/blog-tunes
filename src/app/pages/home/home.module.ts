import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BlogCardModule } from 'src/app/components/utils/blog-card/blog-card.module';
import { MainSectionComponent } from './partials/main-section/main-section.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  declarations: [
    HomeComponent,
    MainSectionComponent,

  ],
  imports: [
    CommonModule,
    BlogCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,

  ]
})
export class HomeModule { }
