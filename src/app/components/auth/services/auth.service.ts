import { UserRegisterResponseModel } from '../models/response-models/user-register-response-model';
import { UserRegisterRequestModel } from '../models/request-models/user-register-request-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly gatewayServer: string = `${environment.gatewayServer}/authentication`
  private httpClient: HttpClient = inject(HttpClient)

  constructor() { }

  register(userRegisterRequestModel: UserRegisterRequestModel){
    return this.httpClient.post<UserRegisterResponseModel>(`${this.gatewayServer}/sign-up`, userRegisterRequestModel)
  }
}
