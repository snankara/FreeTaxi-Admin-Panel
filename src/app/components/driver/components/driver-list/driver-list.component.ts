import { Table } from 'primeng/table';
import { DriverResponseModel } from './../../models/response-models/driver-response-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {

  drivers : DriverResponseModel[] = [{id: 1, userId : 1, birthDate: '10/22/2022', firstName: 'Ahmet', lastName: 'Çetin'},
  {id: 2, userId : 2, birthDate: '03/25/1999', firstName: 'Sinan', lastName: 'Kara'}]

  selectedDrivers: DriverResponseModel []

  constructor() { }

  ngOnInit(): void {
  }

  deleteAll(){
    console.log(this.selectedDrivers); 
  }

  clearFilter(driversTable: Table){
    driversTable.clear();
  }
}
