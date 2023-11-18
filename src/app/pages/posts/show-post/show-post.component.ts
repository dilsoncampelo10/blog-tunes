import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit{

  post: Post = new Post();

  constructor(private activeRouter: ActivatedRoute, private postService: PostService){
      this.activeRouter.paramMap.subscribe(value => this.post.id = value.get('id'));

  }

  ngOnInit(): void {
    this.findById(this.post.id);
  }

  findById(id:string | null): void{
      this.postService.findById(id)
      .subscribe({
        next: response => this.post = response,
        error: err => console.log(err)
      });
  }


}
