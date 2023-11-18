import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private request: HttpClient) { }

  private baseURL: string = "http://localhost:8080/posts";

  findAll():Observable<Post[]>{
      return this.request.get<Post[]>(this.baseURL);
  }

  findById(id: string | null):Observable<Post>{
      return this.request.get<Post>(`${this.baseURL}/${id}`);
  }

  create(obj:Post):Observable<Post>{
      return this.request.post<Post>(this.baseURL, obj)
  }
}
