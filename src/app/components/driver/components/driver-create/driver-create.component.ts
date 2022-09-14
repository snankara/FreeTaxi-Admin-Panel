import { DriverCreateRequestModel } from './../../models/request-models/driver-create-request-model';
import { ConfirmService } from './../../../../services/confirm.service';
import { DriverService } from './../../service/driver.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.scss']
})
export class DriverCreateComponent implements OnInit {

  driverCreateDialog: boolean;
  formSubmitted: boolean

  driverCreateForm: FormGroup

  constructor(private formBuilder: FormBuilder, private driverService: DriverService,
    private confirmService: ConfirmService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.driverCreateForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      birthDate: ["2022-04-11", Validators.required]
    })
  }

  confirm() {
    this.formSubmitted = true
    if (this.driverCreateForm.valid)
      this.confirmService.confirmSave("confirmDriverCreate").subscribe(confirmResult => {
        if (confirmResult)
          this.save()
      })
  } 

  save() {
    // this.driverService.create(this.prepareDriverCreateData()).subscribe({
    //   next: (v) => console.log(v),
    //   error: (e) => console.log(e),
    //   complete: () => console.log("Completed !")
      
    // })
    this.hideDialog();
  }

  prepareDriverCreateData(): DriverCreateRequestModel{
    let driverCreateRequestModel : DriverCreateRequestModel = Object.assign({userId: 1}, this.driverCreateForm.value)
    console.log(driverCreateRequestModel);
    
    return driverCreateRequestModel;
  }

  openDialog() {
    this.driverCreateDialog = !this.driverCreateDialog;
    this.formSubmitted = false;
  }

  hideDialog() {
    this.driverCreateForm.reset()
    this.driverCreateDialog = !this.driverCreateDialog;
  }

}
