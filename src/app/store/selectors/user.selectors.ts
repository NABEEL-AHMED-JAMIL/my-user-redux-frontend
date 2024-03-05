import { createSelector } from '@ngrx/store';
import { UserState } from '../reducers';

export const selectUserState = (state: { users: UserState }) => state.users;

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);