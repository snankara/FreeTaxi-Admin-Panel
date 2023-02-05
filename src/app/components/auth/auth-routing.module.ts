import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: AuthComponent,
    children: [
      { path: "login", loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
      { path: "driver-register", loadChildren: () => import('./components/register/driver-register/driver-register.module').then(m => m.DriverRegisterModule) },
      { path: "passenger-register", loadChildren: () => import('./components/register/passenger-register/passenger-register.module').then(m => m.PassengerRegisterModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
