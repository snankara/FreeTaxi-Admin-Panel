import { ModeService } from './services/mode.service';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'free-taxi-admin-panel';
  menuMode = 'static';

  constructor(private primengConfig: PrimeNGConfig, private modeService: ModeService) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
    this.modeService.setMode();    
  }
}
