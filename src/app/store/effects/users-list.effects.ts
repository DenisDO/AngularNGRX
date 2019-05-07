import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsersListService } from 'src/app/pages/users-list-page/users-list-page.service';
import { EUsersListActions, LoadUsers, LoadUsersSuccess, LoadUsersFailed } from '../actions/users-list.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Injectable()
export class UsersListEffects {
    constructor(
        private actions$: Actions,
        private usersListService: UsersListService
    ) {}

    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType(EUsersListActions.LoadUsers),
        switchMap((action: LoadUsers) => {
            return this.usersListService.loadUsersList();
        }),
        map((response: IUser[]) => {
            return new LoadUsersSuccess(response);
        }),
        catchError(error => of(new LoadUsersFailed(error)))
    );
}
