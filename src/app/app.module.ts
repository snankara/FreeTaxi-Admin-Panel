import { MessageService, ConfirmationService } from 'primeng/api';
import { MenuService } from './shared/menu/service/menu.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MainComponent } from './shared/main/main.component';
import { MenuItemComponent } from './shared/menu/menu-item/menu-item.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    MenuItemComponent,
    LoginComponent,
    DashboardComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    ScrollPanelModule,
    BadgeModule,
    RippleModule
  ],
  providers: [MenuService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
