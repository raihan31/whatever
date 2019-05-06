import { Routes } from '@angular/router';
import { DefaultComponent } from '../toolbar/default/default.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { AccountActivationComponent } from './components/account-activation/account-activation.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    redirectTo: 'login',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'account-activate/:activationCode',
        component: AccountActivationComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      }
    ]
  }
];
