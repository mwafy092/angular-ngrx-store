import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { PostInterface } from '../types/posts.interface';
import { Store, select } from '@ngrx/store';
import * as PostsAction from '../store/actions';
import {
  errorSelector,
  isLoadingSelector,
  postsSelector,
} from '../store/selectors';
import { Observable } from 'rxjs';
import { AppStateInterface } from '../../types/appState.interface';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$!: Observable<PostInterface[]>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(PostsAction.getPosts());
  }
}
