import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './pages/home/home.module';
import { FooterModule } from './components/footer/footer.module';
import { ShowPostModule } from './pages/posts/show-post/show-post.module';
import { CreatePostModule } from './pages/posts/create-post/create-post.module';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    FooterModule,
    HomeModule,
    ShowPostModule,
    CreatePostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
