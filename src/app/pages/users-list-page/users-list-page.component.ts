import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { LoadUsers } from 'src/app/store/actions/users-list.action';
import { selectUsersList } from 'src/app/store/selectors/users-list.selectors';
import { SelectCurrentUser } from 'src/app/store/actions/user-details.actions';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list-page.component.html',
    styleUrls: ['./users-list-page.component.scss']
})
export class UsersListComponent implements OnInit {
    constructor(
        private store: Store<IAppState>
    ) {}

    public usersList$ = this.store.pipe(select(selectUsersList));

    ngOnInit(): void {
        this.store.dispatch(new LoadUsers());
    }

    selectCurrentUser(user) {
        this.store.dispatch(new SelectCurrentUser(user));
    }
}
