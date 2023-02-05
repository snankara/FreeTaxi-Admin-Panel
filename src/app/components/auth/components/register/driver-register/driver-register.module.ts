import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { AvatarModule } from 'primeng/avatar';
import { DriverRegisterComponent } from './driver-register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRegisterRoutingModule } from './driver-register-routing.module';


@NgModule({
  declarations: [
    DriverRegisterComponent
  ],
  imports: [
    CommonModule,
    DriverRegisterRoutingModule,
    AvatarModule,
    PasswordModule,
    ReactiveFormsModule,
    DividerModule,
    ButtonModule,
    InputTextModule
  ]
})
export class DriverRegisterModule { }
