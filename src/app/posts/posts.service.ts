import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInterface } from './types/posts.interface';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}
  getPosts(): Observable<PostInterface[]> {
    const posts = [
      { id: '1', title: 'happy new year 🥳🥶' },
      { id: '2', title: 'welcome 2023 🎉' },
      { id: '3', title: '2022 was an amazing year 🥰' },
    ];
    return of(posts).pipe(delay(2000));
  }
}
