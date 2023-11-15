import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BlogCardModule } from 'src/app/components/utils/blog-card/blog-card.module';
import { MainSectionComponent } from './partials/main-section/main-section.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainSectionComponent,

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
