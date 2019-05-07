import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SignInService } from 'src/app/pages/sign-in-page/sign-in-page.service';
import { ESignInActions, SignIn, SignInSuccess, SignInFailed } from '../actions/sign-in.actions';
import { switchMap, map } from 'rxjs/operators';
import { ISignInResponse } from 'src/app/shared/interfaces/sign-in-response.inteface';
import randomize from '../../shared/utils/randomize';
import { of, iif } from 'rxjs';

@Injectable()
export class SignInEffects {
    constructor(
        private actions$: Actions,
        private signInService: SignInService
    ) {}

    @Effect()
    signIn$ = this.actions$.pipe(
        ofType(ESignInActions.SignIn),
        switchMap((action: SignIn) => {
            return iif(randomize, this.signInService.signIn(action.payload), of('Cannot be authorized!'));
        }),
        map((response: ISignInResponse) => {
            return response.token ? new SignInSuccess(response) : new SignInFailed(response);
        })
    );

    @Effect({dispatch: false})
    signInSuccess$ = this.actions$.pipe(
        ofType(ESignInActions.SignInSuccess),
        map((action: SignInSuccess) => {
            localStorage.setItem('token', JSON.stringify(action.payload.token));
        })
    );

    @Effect({dispatch: false})
    signInFailed$ = this.actions$.pipe(
        ofType(ESignInActions.SignInFailed),
        map((action: SignInFailed) => {
            localStorage.removeItem('token');
        })
    );
}
