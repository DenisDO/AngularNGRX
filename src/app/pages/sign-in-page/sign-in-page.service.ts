import { Injectable } from '@angular/core';
import { ISignInResponse } from 'src/app/shared/interfaces/sign-in-response.inteface';
import { Observable } from 'rxjs';
import { IUserCredentials } from 'src/app/shared/interfaces/user-credentials.interface';
import { USERS_BASE_API_URL } from 'src/app/shared/configuration/config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignInService {
    constructor(private http: HttpClient) {}

    signIn(requestBody: IUserCredentials): Observable<ISignInResponse> {
        // return this.http.post<ISignInResponse>(`${USERS_BASE_API_URL}/login`, requestBody);
        return Observable.create(observer => {
            observer.next({
                token: 'asdr5t6y7u8i9o0lpplmkiuy65rdfvbnkjui099j'
            });
        });
    }
}
