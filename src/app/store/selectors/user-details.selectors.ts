import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IUserState } from '../state/user.state';

const currentUser = (state: IAppState) => state.currentUser;

export const selectCurrentUser = createSelector(
    currentUser,
    (state: IUserState) => state.currentUser
);
