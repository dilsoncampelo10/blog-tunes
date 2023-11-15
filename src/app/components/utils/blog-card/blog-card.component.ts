import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {

  @Input()
  image: string = '';
  @Input()
  authorName:string = 'Anônimo';
  @Input()
  description: string = '';
  @Input()
  title:string = '';
  @Input()
  date: string = '';
  @Input()
  autor: string = '';
}
