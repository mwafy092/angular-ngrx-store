import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsService } from '../posts.service';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule],
  providers: [PostsService],
  exports: [PostsComponent],
})
export class PostsModule {}
