import { selectDrivers } from './../../store/driver.selectors';
import { invokeRetrieveAll } from './../../store/driver.actions';
import { Store, select } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { DriverService } from './../../service/driver.service';
import { Table } from 'primeng/table';
import { DriverResponseModel } from './../../models/response-models/driver-response-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {

  selectedDrivers: DriverResponseModel[]

  drivers$ = this.store.pipe(select(selectDrivers))

  constructor(private store: Store, private messageService: MessageService, private driverService: DriverService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  deleteAll() {
    console.log(this.selectedDrivers);
  }

  clearFilter(driversTable: Table) {
    driversTable.clear();
  }

  retrieveAll() {
    this.store.dispatch(invokeRetrieveAll());
  }
}
