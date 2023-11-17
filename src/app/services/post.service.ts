import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable()
export class PostService {

constructor(private request: HttpClient) { }

  private baseURL: string = "http://localhost:8080/posts";

  create(obj:Post):Observable<Post>{
      return this.request.post<Post>(this.baseURL, obj)
  }
}
