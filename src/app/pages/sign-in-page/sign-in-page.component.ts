import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})
export class SignInComponent {
    public email: string;
    public password: string;

    constructor() {}

    signIn(): void {

    }
}
