import { UserRegisterRequestModel } from '../user-register-request-model';
export class DriverRegisterRequestModel extends UserRegisterRequestModel {

    constructor(name: string, userName: string, password: string) {
        super(name, userName, password);
    }

    toUserModel(): UserRegisterRequestModel {
        return new UserRegisterRequestModel(this.name,
            this.userName,
            this.password)
    }
}