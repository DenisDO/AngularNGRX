import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { signInReducers } from './sign-in.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    currentUser: null,
    usersList: null,
    signInResponse: signInReducers
};
