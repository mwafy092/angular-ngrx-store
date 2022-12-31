import { PostInterface } from './posts.interface';
export interface PostsStateInterface {
  isLoading: boolean;
  posts: PostInterface[];
  error: string | null;
}
