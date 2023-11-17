import { PostService } from './../../../services/post.service';
import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  constructor(private postSerivce: PostService){}
  post : Post = new Post();

  create(): void{
    this.postSerivce.create(this.post)
    .subscribe({
      next: response => {console.log("Adicionado")},
      error: err => {console.log("Erro")}
    })
  }
}
