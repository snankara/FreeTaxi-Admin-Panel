import { DriverRegisterRequestModel } from '../../../models/request-models/driver-register/driver-register-request-model';
import { UserRegisterRequestModel } from '../../../models/request-models/user-register-request-model';
import { ModeService } from './../../../../../services/mode.service';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.scss']
})
export class DriverRegisterComponent implements OnInit {

  password: string;
  loading: boolean = false

  registerForm: FormGroup
  private formBuilder: FormBuilder = inject(FormBuilder)
  private authService = inject(AuthService)
  private store = inject(Store)

  constructor(private modeService: ModeService) { }

  ngOnInit(): void {
    this.createRegisterForm()
  }

  isLightMode() {
    return this.modeService.isLightMode();
  }

  clicked(){
    this.loading = true
  }

  createRegisterForm(){
    //Driver Register
    this.registerForm = this.formBuilder.group({
      name: [],
      lastName: [],
      userName: [],
      password: [],
      birthDate: []
    })
  }

  register(){
    // this.authService.register(this.prepareRegisterData()).subscribe(res => {

    // })
    this.loading = true
    console.log(this.prepareRegisterData());
    
  }

  prepareRegisterData(): UserRegisterRequestModel{
    let driverRegisterRequestModel : DriverRegisterRequestModel = this.registerForm.value
    console.log(driverRegisterRequestModel);
    
    let user = new DriverRegisterRequestModel(driverRegisterRequestModel.name, 
      driverRegisterRequestModel.userName, 
      driverRegisterRequestModel.password)

      console.log(user);

    return user.toUserModel();
  }
}
