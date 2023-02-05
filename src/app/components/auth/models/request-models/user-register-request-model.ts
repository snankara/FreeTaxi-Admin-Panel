import { DriverRegisterRequestModel } from './driver-register/driver-register-request-model';
export class UserRegisterRequestModel{
    name: string
    userName: string
    password: string

    constructor(name: string, userName: string, password: string){
        this.name = name;
        this.userName = userName;
        this.password = password;
    }
}