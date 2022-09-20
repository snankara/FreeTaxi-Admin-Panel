import { DriverResponseModel } from './models/response-models/driver-response-model';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

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
