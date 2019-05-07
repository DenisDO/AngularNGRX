import { Action } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/user.interface';

export enum EUsersListActions {
    LoadUsers = 'LoadUsers',
    LoadUsersSuccess = 'LoadUsersSuccess',
    LoadUsersFailed = 'LoadUsersFailed'
}

export class LoadUsers implements Action {
    public readonly type = EUsersListActions.LoadUsers;
}

export class LoadUsersSuccess implements Action {
    public readonly type = EUsersListActions.LoadUsersSuccess;

    constructor(public payload: IUser[]) {}
}

export class LoadUsersFailed implements Action {
    public readonly type = EUsersListActions.LoadUsersFailed;

    constructor(public payload) {}
}

export type UsersListActions =
    LoadUsers |
    LoadUsersSuccess |
    LoadUsersFailed;
