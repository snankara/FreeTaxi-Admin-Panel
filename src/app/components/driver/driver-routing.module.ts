import { DriverListComponent } from './components/driver-list/driver-list.component';
import { DriverComponent } from './driver.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: DriverComponent,
    children: [
      { path: "", component: DriverListComponent }
    ] 
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
