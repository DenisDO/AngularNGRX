import { IUser } from './user.interface';

export interface IUsersListResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
}
