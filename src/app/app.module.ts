import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInModule } from './pages/sign-in-page/sign-in-page.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SignInEffects } from './store/effects/sign-in.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UsersListModule } from './pages/users-list-page/users-list-page.module';
import { UsersListEffects } from './store/effects/users-list.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    SignInModule,
    UsersListModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([SignInEffects, UsersListEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
