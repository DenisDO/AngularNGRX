import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in-page.component';
import { CommonModule } from '@angular/common';
import { SignInService } from './sign-in-page.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        SignInService
    ],
    exports: [
        SignInComponent
    ]
})
export class SignInModule {}
