import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { signInReducers } from './sign-in.reducers';
import { usersListReducers } from './users-list.reducers';
import { userDetailsReducers } from './user-details.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    currentUser: userDetailsReducers,
    usersList: usersListReducers,
    signInResponse: signInReducers
};
