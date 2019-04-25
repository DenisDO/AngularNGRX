import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { SignIn } from 'src/app/store/actions/sign-in.actions';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})
export class SignInComponent {
    public email: string;
    public password: string;

    constructor(private store: Store<IAppState>) {}

    signIn(): void {
        this.store.dispatch(new SignIn({email: this.email, password: this.password}));
    }
}
