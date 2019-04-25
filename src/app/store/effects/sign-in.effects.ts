import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { IAppState } from '../state/app.state';
import { SignInService } from 'src/app/pages/sign-in-page/sign-in-page.service';
import { ESignInActions, SignIn, SignInSuccess } from '../actions/sign-in.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { IUserCredentials } from 'src/app/shared/interfaces/user-credentials.interface';
import { ISignInResponse } from 'src/app/shared/interfaces/sign-in-response.inteface';


@Injectable()
export class SignInEffects {
    constructor(
        private actions$: Actions,
        private store: Store<IAppState>,
        private signInService: SignInService
    ) {}

    @Effect()
    signIn$ = this.actions$.pipe(
        ofType<SignIn>(ESignInActions.SignIn),
        map((action: SignIn) => {
            console.warn(action.payload);
            return action.payload;
        }),
        switchMap((credentials: IUserCredentials) => {
            const resp = this.signInService.signIn(credentials);
            console.warn(resp);
            return resp;
        }),
        map((response: ISignInResponse) => new SignInSuccess(response))
    );
}
