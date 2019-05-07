import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USERS_LIST_API_URL } from 'src/app/shared/configuration/config';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Injectable()
export class UsersListService {
    constructor(private http: HttpClient) {}

    loadUsersList(): Observable<IUser[]> {
        return this.http.get<IUser[]>(USERS_LIST_API_URL + '?ext&amount=25');
    }
}
