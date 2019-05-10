import { Action } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/user.interface';

export enum EUserDetailsActions {
    SelectCurrentUser = 'SelectCurrentUser',
    ClearCurrentUser = 'ClearCurrentUser'
}

export class SelectCurrentUser implements Action {
    public readonly type = EUserDetailsActions.SelectCurrentUser;

    constructor(public payload: IUser) {}
}

export class ClearCurrentUser implements Action {
    public readonly type = EUserDetailsActions.ClearCurrentUser;
}

export type UserDetailsActions = SelectCurrentUser | ClearCurrentUser;
