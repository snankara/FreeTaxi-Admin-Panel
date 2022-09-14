import { DriverResponseModel } from './models/response-models/driver-response-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  drivers : DriverResponseModel[] = [{id: 1, userId : 1, birthDate: '22.10.2022', firstName: 'Ahmet', lastName: 'Çetin'},
  {id: 2, userId : 2, birthDate: '25.03.1999', firstName: 'Sinan', lastName: 'Kara'}]
  
  selectedDrivers: DriverResponseModel []

  constructor() { }

  ngOnInit(): void {
  }


  deleteAll(){
    console.log(this.selectedDrivers);
    
  }
}
