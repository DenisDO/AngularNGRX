import { Action } from '@ngrx/store';
import { IUserCredentials } from 'src/app/shared/interfaces/user-credentials.interface';
import { ISignInResponse } from 'src/app/shared/interfaces/sign-in-response.inteface';

export enum ESignInActions {
    SignIn = 'SignIn',
    SignInSuccess = 'SignInSuccess',
    SignInFailed = 'SignInFailed'
}

export class SignIn implements Action {
    public readonly type = ESignInActions.SignIn;
    constructor(public payload: IUserCredentials) {}
}

export class SignInSuccess implements Action {
    public readonly type = ESignInActions.SignInSuccess;
    constructor(public payload: ISignInResponse) {}
}

export class SignInFailed implements Action {
    public readonly type = ESignInActions.SignInFailed;
    constructor(public payload: ISignInResponse) {}
}

export type SignInActions = SignIn | SignInSuccess | SignInFailed;
