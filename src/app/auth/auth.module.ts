import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './components/default/default.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { AccountActivationComponent } from './components/account-activation/account-activation.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { routes } from './auth.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: DefaultComponent,
          children: [
            {
              path: '',
              redirectTo: 'login',
              pathMatch: 'full'
            },
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
      ]
    )
  ],
  declarations: [
    DefaultComponent,
    LoginComponent,
    SigninComponent,
    AccountActivationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  exports: [ DefaultComponent ]
})
export class AuthModule { }
