import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initialUserState } from './user.state';
import { IUsersListState, initialUsersListState } from './users-list.state';

export interface IAppState {
    router?: RouterReducerState;
    currentUser: IUserState;
    usersList: IUsersListState;
}

export const initialAppState: IAppState = {
    currentUser: initialUserState,
    usersList: initialUsersListState
};

export function getInitialAppState(): IAppState {
    return initialAppState;
}
