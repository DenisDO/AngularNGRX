import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectCurrentUser } from 'src/app/store/selectors/user-details.selectors';
import { ClearCurrentUser } from 'src/app/store/actions/user-details.actions';

@Component({
    selector: 'app-user-details-modal',
    templateUrl: './user-details-modal.component.html',
    styleUrls: ['./user-details-modal.component.scss']
})
export class UserDetailsModalComponent {
    constructor(
        private store: Store<IAppState>
    ) {}

    public currentUser$ = this.store.pipe(select(selectCurrentUser));

    clearCurrentUser() {
        this.store.dispatch(new ClearCurrentUser());
    }
}
