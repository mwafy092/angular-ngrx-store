import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { PostInterface } from '../types/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts!: PostInterface[];
  constructor(private postsService: PostsService) {}
  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
