import { PostType } from 'src/types/PostType';
import { Component, OnInit } from '@angular/core';
import { data } from 'src/data/dataFaker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

    constructor(){

    }

    posts: PostType[]= data;
    ngOnInit(): void {
      console.log(this.posts)
    }
}
