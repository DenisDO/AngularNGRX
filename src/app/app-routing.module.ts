import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in-page/sign-in-page.component';
import { UsersListComponent } from './pages/users-list-page/users-list-page.component';
import { IsUserGuard } from './core/guards/isUser.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'users',
    canActivate: [IsUserGuard],
    component: UsersListComponent
  },
  {
    path: '**',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
