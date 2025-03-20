import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// compoenet
import {
  ForgotComponent,
  LoginComponent,
  ResetComponent,
  ListBookComponent,
  ListAuthorComponent
} from './components/index';
import { AuthGuard } from './helpers';
import { Role } from './models';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgotpass',
        component: ForgotComponent
      },
      {
        path: 'resetpass',
        component: ResetComponent
      }
    ]
  },
  {
    path: 'ql',
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'QL',
      roles: [Role.ADMIN, Role.USER]
    },
    children: [
      {
        path: 'mybook',
        component: ListBookComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'My Book',
          roles: [Role.ADMIN, Role.USER]
        }
      },
      {
        path: 'authors',
        component: ListAuthorComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Authors',
          roles: [Role.ADMIN]
        }
      },
      {
        path: 'publicbook',
        component: ListBookComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Public Book',
          roles: [Role.ADMIN, Role.USER]
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

/**
 * @author Nabeel Ahmed
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
