import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsService } from '../posts.service';
import { reducers } from '../store/reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, StoreModule.forFeature('posts', reducers)],
  providers: [PostsService],
  exports: [PostsComponent],
})
export class PostsModule {}
