import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set<T = object, TKeyValue = string>(entity: T, keyValue: TKeyValue) {
    localStorage.setItem(keyValue.toString(), JSON.stringify(entity))
  }

  get<TKeyValue = string>(keyValue: TKeyValue) {
    var entity = JSON.parse(localStorage.getItem(keyValue.toString()));
    return entity;
  }

  remove<TKeyValue = string>(keyValue: TKeyValue) {
    localStorage.removeItem(keyValue.toString())
  }

  clear() {
    localStorage.clear();
  }
}
