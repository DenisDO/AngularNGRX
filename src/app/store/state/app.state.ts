import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initialUserState } from './user.state';
import { IUsersListState, initialUsersListState } from './users-list.state';
import { ISignInResponseState, initialSignInResponse } from './sign-in-response.state';

export interface IAppState {
    router?: RouterReducerState;
    currentUser: IUserState;
    usersList: IUsersListState;
    signInResponse: ISignInResponseState;
}

export const initialAppState: IAppState = {
    currentUser: initialUserState,
    usersList: initialUsersListState,
    signInResponse: initialSignInResponse
};

export function getInitialAppState(): IAppState {
    return initialAppState;
}
