import { ModeService } from './../../services/mode.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent{

  constructor(public modeService: ModeService) {}

  isLightMode() {
    return this.modeService.isLightMode();
  }
}
