import { MainComponent } from './../main/main.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <p-scrollPanel [style]="{width: '100%', height: '100%'}">
  <div class="layout-menu-container">
      <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
          <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" role="none">
              <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
              <ul role="menu">
                  <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
              </ul>
          </li>
      </ul>
  </div>
  </p-scrollPanel>
`})
export class MenuComponent implements OnInit {

  model: any[];

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      },
      {
        label: 'Drivers',
        items: [
          { label: 'Driver Operations', icon: 'pi pi-car', routerLink: ['driveroperations'] }
        ]
      },
      {
        label: 'Passengers',
        items: [
          { label: 'Passenger Operations', icon: 'pi pi-users', routerLink: ['a']}
        ]
      },
      {
        label: 'Payments',
        items: [
          { label: 'Payment Operations', icon: 'pi pi-wallet', routerLink: ['b']}
        ]
      },
      {
        label: 'Notificatiions',
        items: [
          { label: 'Notification Operations', icon: 'pi pi-info-circle', routerLink: ['c']}
        ]
      }
    ];
  }


  onKeydown(event: KeyboardEvent) {
    const nodeElement = (<HTMLDivElement>event.target);
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }

}
