import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  private readonly lightMode: string = "lara-light-indigo"
  private readonly darkMode: string = "lara-dark-indigo"

  private readonly themeElement = document.getElementById('theme-css');

  constructor(private localStorageService: LocalStorageService) { }

  setMode() {
    this.getMode() === null || this.getMode() === this.lightMode ? this.setLightMode() : this.setDarkMode()
  }

  getMode(): string {
    return this.localStorageService.get('mode')
  }

  setLightMode() {
    this.themeElement.setAttribute('href', `assets/theme/${this.lightMode}/theme.css`)
    this.localStorageService.set(this.lightMode, 'mode')
  }

  setDarkMode() {
    this.themeElement.setAttribute('href', `assets/theme/${this.darkMode}/theme.css`)
    this.localStorageService.set(this.darkMode, 'mode')
  }

  changeMode() {
    this.getMode() === this.lightMode ? this.setDarkMode() : this.setLightMode()
  }

  isLightMode(): boolean {
    return this.getMode() === this.lightMode ? true : false
  }
}
