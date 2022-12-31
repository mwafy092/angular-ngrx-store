import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
export const selectFeature = (state: AppStateInterface) => state;
export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.posts.isLoading
);
export const postsSelector = createSelector(
  selectFeature,
  (state) => state.posts.posts
);
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.posts.error
);
