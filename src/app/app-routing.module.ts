import { AuthGuard } from './guards/auth.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './shared/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "", component: MainComponent, canActivate: [AuthGuard],
    children: [
      { path: "", component: DashboardComponent },
      { path: "driveroperations", loadChildren: () => import('./components/driver/driver.module').then(m => m.DriverModule) }
    ]
  },

  { path: "auth", loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
