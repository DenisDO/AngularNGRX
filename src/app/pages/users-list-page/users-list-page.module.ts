import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list-page.component';
import { CommonModule } from '@angular/common';
import { UsersListService } from './users-list-page.service';

@NgModule({
    declarations: [
        UsersListComponent
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
