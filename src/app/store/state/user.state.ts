import { IUser } from 'src/app/shared/interfaces/user.interface';

export interface IUserState {
    currentUser: IUser;
}

export const initialUserState: IUserState = {
    currentUser: null
};
