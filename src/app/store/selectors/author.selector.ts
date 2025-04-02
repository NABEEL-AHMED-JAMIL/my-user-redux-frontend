import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthorState } from '../reducers/author.reducer';

/**
 * @author Nabeel Ahmed
 */
// Select the author feature state
export const selectAuthorFeature = createFeatureSelector<AuthorState>('authorReducer');

// Select the author object
export const selectAuthor = createSelector(
    selectAuthorFeature,
    (state: AuthorState) => state.author
);

// Select the list of authors
export const selectAuthors = createSelector(
    selectAuthorFeature,
    (state: AuthorState) => state.authors
);
