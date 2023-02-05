import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { AvatarModule } from 'primeng/avatar';
import { PassengerRegisterComponent } from './passenger-register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRegisterRoutingModule } from './passenger-register-routing.module';


@NgModule({
  declarations: [
    PassengerRegisterComponent
  ],
  imports: [
    CommonModule,
    PassengerRegisterRoutingModule,
    AvatarModule,
    PasswordModule,
    ReactiveFormsModule,
    DividerModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PassengerRegisterModule { }
