import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in-page.component';
import { CommonModule } from '@angular/common';
import { SignInService } from './sign-in-page.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        SignInService
    ],
    exports: [
        SignInComponent
    ]
})
export class SignInModule {}
