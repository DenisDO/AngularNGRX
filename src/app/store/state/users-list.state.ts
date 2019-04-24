import { IUsersListResponse } from 'src/app/shared/interfaces/users-list-response.interface';

export interface IUsersListState {
    usersList: IUsersListResponse;
}

export const initialUsersListState: IUsersListState = {
    usersList: null
};
