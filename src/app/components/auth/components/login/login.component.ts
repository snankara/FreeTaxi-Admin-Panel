import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModeService } from '../../../../services/mode.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;

  loginForm: FormGroup

  private formBuilder : FormBuilder = inject(FormBuilder)

  constructor(private modeService: ModeService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  isLightMode() {
    return this.modeService.isLightMode();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  
}
