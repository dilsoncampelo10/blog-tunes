import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/data/dataFaker';
import { PostType } from 'src/types/PostType';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit{

  id: string | null= "";
  image: string = "";
  title: string = "";
  description : string | undefined ="";
  date: string = "";
  author: string = "";

  constructor(private activeRouter: ActivatedRoute){
      this.activeRouter.paramMap.subscribe(value => this.id = value.get('id'))

  }

  ngOnInit(): void {
    this.setValuesToPost(this.id)
  }

  setValuesToPost(id: string | null):void{
    const result: PostType[] = data.filter(post => post.id == this.id);

    if(result){
      this.mountPost(result);
    }
  }

  mountPost(result:PostType[]):void{
    this.title = result[0].title;
    this.description = result[0].description;
    this.image = result[0].image;
    this.date = result[0].date;
    this.author = result[0].author;
  }
}
