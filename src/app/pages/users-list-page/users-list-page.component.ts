import { Component } from '@angular/core';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list-page.component.html',
    styleUrls: ['./users-list-page.component.scss']
})
export class UsersListComponent {
    columnsToDisplay = ['userID', 'userAvatar', 'userName', 'userSurname'];
}
