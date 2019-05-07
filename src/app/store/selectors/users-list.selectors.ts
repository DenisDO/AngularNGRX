import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IUsersListState } from '../state/users-list.state';

const usersList = (state: IAppState) => state.usersList;

export const selectUsersList = createSelector(
    usersList,
    (state: IUsersListState) => state
);
