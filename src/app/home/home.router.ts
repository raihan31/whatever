import { Routes } from '@angular/router';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
export const routes: Routes = [
    {
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
    },
    {
      path: 'auth',
      loadChildren: '../auth/auth.module#AuthModule'
    },
    {
      path: '401',
      component: UnauthorizedComponent
    },
    {
      path: '404',
      component: NotFoundComponent
    },
    {
      path: '**',
      redirectTo: '/404'
    }
];