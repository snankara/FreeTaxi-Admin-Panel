import { ModeService } from './../../services/mode.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { MainComponent } from './../main/main.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public appMain: MainComponent, public modeService: ModeService) { }
  visibleSidebar = false
  ngOnInit(): void {
  }

  isLightMode() {
    return this.modeService.isLightMode();
  }

  changeMode(){
    this.modeService.changeMode();
  }

  isAuthenticated(){
    return 0;
  }
}
