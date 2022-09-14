import { ModeService } from './../../services/mode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;

  constructor(private modeService: ModeService) { }

  ngOnInit(): void {
  }

  isLightMode() {
    return this.modeService.isLightMode();
  }

}
