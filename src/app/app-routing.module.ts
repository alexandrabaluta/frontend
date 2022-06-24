import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboardstudent',
    loadChildren: () =>
      import('./dashboarduser/dashboards.module').then((m) => m.DashboardsModule),
  },
  {
    path: 'dashboardteacher',
    loadChildren: () =>
      import('./dashboardadmin/dashboardadmin.module').then((m) => m.DashboardadminModule),
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
}

