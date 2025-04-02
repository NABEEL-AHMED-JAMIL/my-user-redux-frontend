import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from '../reducers/book.reducer';

/**
 * @author Nabeel Ahmed
 */
// Select the book feature state
export const selectBookFeature = createFeatureSelector<BookState>('bookReducer');

// Select the book object
export const selectBook = createSelector(
    selectBookFeature,
    (state: BookState) => state.book
);

// Select the list of books
export const selectBooks = createSelector(
    selectBookFeature,
    (state: BookState) => state.books
);
