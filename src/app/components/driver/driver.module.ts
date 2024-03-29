import { DriverEffect } from './store/driver.effect';
import { EffectsModule } from '@ngrx/effects';
import { driverFeature } from './store/driver.reducer';
import { StoreModule } from '@ngrx/store';
import { DriverComponent } from './driver.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverCreateComponent } from './components/driver-create/driver-create.component';
import { DialogModule } from 'primeng/dialog';

import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { SkeletonModule } from 'primeng/skeleton';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverUpdateComponent } from './components/driver-update/driver-update.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { DriverListSkeletonComponent } from './components/driver-list/driver-list-skeleton/driver-list-skeleton.component';

@NgModule({
  declarations: [
    DriverCreateComponent,
    DriverComponent,
    DriverUpdateComponent,
    DriverListComponent,
    DriverListSkeletonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DriverRoutingModule,
    DialogModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    CalendarModule,
    ConfirmDialogModule,
    ToastModule,
    TooltipModule,
    MessagesModule,
    SkeletonModule,
    StoreModule.forFeature(driverFeature),
    EffectsModule.forFeature([DriverEffect])
  ]
})
export class DriverModule { }
