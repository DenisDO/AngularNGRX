import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { LoadUsers } from 'src/app/store/actions/users-list.action';
import { selectUsersList } from 'src/app/store/selectors/users-list.selectors';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list-page.component.html',
    styleUrls: ['./users-list-page.component.scss']
})
export class UsersListComponent implements OnInit {
    constructor(
        private store: Store<IAppState>
        ) {}

    columnsToDisplay = ['userID', 'userAvatar', 'userName', 'userSurname'];
    usersList$ = this.store.pipe(select(selectUsersList));

    ngOnInit(): void {
        this.store.dispatch(new LoadUsers());
    }
}
