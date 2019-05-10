import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list-page.component';
import { CommonModule } from '@angular/common';
import { UsersListService } from './users-list-page.service';
import { UserDetailsModalComponent } from './user-details-modal/user-details-modal.component';

@NgModule({
    declarations: [
        UsersListComponent,
        UserDetailsModalComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        UsersListService
    ],
    exports: []
})
export class UsersListModule {}
