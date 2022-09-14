import { DriverUpdateResponseModel } from './../models/response-models/driver-update-response-model';
import { DriverUpdateRequestModel } from './../models/request-models/driver-update-request-model';
import { DriverResponseModel } from './../models/response-models/driver-response-model';
import { SingleResponseModel } from './../../../models/response-models/single-response-model';
import { DriverCreateResponseModel } from './../models/response-models/driver-create-response-model';
import { DriverCreateRequestModel } from './../models/request-models/driver-create-request-model';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private readonly gatewayServer: string = `${environment.gatewayServer}/driver`

  constructor(private httpClient: HttpClient) { }

  create(driverCreateRequestModel: DriverCreateRequestModel) {
    return this.httpClient.post<DriverCreateResponseModel>(this.gatewayServer, driverCreateRequestModel)
  }

  update(driverUpdateRequestModel: DriverUpdateRequestModel) {
    return this.httpClient.post<DriverUpdateResponseModel>(this.gatewayServer, driverUpdateRequestModel)
  }

  retrieve(driverId: number) {
    return this.httpClient.get<SingleResponseModel<DriverResponseModel>>(`${this.gatewayServer}/${driverId}`);
  }
}
