import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { PostInterface } from '../types/posts.interface';
import { Store } from '@ngrx/store';
import * as PostsAction from '../store/actions';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts!: PostInterface[];
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(PostsAction.getPosts());
  }
}
