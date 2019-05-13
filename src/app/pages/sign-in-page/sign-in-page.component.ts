import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { SignIn } from 'src/app/store/actions/sign-in.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})
export class SignInComponent implements OnInit {
    public signInForm: FormGroup;

    constructor(private store: Store<IAppState>) { }

    ngOnInit() {
        this.initSignInForm();
    }

    private initSignInForm(): void {
        this.signInForm = new FormGroup({
            email: new FormControl('', [
                Validators.email,
                Validators.required
            ]),
            password: new FormControl('', [
                Validators.minLength(6),
                Validators.maxLength(14),
                Validators.required
            ])
        });
    }

    signIn(e: Event): void {
        e.preventDefault();

        if (this.signInForm.invalid) {
            console.warn(this.signInForm.pristine);
            return;
        }

        const { email, password } = this.signInForm.value;
        this.store.dispatch(new SignIn({ email, password }));
    }
}
