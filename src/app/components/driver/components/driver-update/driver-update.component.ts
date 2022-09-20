import { DriverUpdateRequestModel } from './../../models/request-models/driver-update-request-model';
import { ConfirmService } from './../../../../services/confirm.service';
import { DriverService } from './../../service/driver.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverResponseModel } from './../../models/response-models/driver-response-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-update',
  templateUrl: './driver-update.component.html',
  styleUrls: ['./driver-update.component.scss']
})
export class DriverUpdateComponent implements OnInit {

  driverUpdateDialog: boolean;
  formSubmitted: boolean

  driverUpdateForm: FormGroup

  @Input() driverResponseModel: DriverResponseModel

  constructor(private formBuilder: FormBuilder, private driverService: DriverService,
    private confirmService: ConfirmService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.driverUpdateForm = this.formBuilder.group({
      firstName: [this.driverResponseModel.firstName, Validators.required],
      lastName: [this.driverResponseModel.lastName, Validators.required],
      birthDate: [this.driverResponseModel.birthDate, Validators.required]
    })
  }

  confirm() {
    this.formSubmitted = true
    if (this.driverUpdateForm.valid)
      this.confirmService.confirmUpdate(this.createConfirmDialogKey()).subscribe(confirmResult => {
        if (confirmResult)
          this.update()
      })
  }

  update() {
    console.log("Updated !");
    this.hideDialog();
  }

  prepareDriverUpdateData(): DriverUpdateRequestModel {
    let driverUpdateRequestModel: DriverUpdateRequestModel = Object.assign({
      id: this.driverResponseModel.id,
      userId: this.driverResponseModel.userId
    }, this.driverUpdateForm.value)

    return driverUpdateRequestModel;
  }

  openDialog() {
    this.driverUpdateDialog = !this.driverUpdateDialog;
    this.formSubmitted = false;
  }

  hideDialog() {
    this.driverUpdateDialog = !this.driverUpdateDialog;
  }

  createConfirmDialogKey(): string {
    return (this.driverResponseModel.id + this.driverResponseModel.userId).toString() + 
    this.driverResponseModel.firstName.substring(0, 2)
  }
}
