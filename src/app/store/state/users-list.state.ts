import { IUser } from 'src/app/shared/interfaces/user.interface';

export interface IUsersListState {
    usersList: IUser[];
}

export const initialUsersListState: IUsersListState = {
    usersList: null
};
