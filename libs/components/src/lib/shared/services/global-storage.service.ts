import { Injectable } from '@angular/core';

export enum GlobalStorageKeys {
  user = 'user'
}

@Injectable({
  providedIn: 'root'
})
export class GlobalStorageService {
  readonly keys = GlobalStorageKeys;
  readonly map = new Map();

  constructor() {
  }

  getItem(key: GlobalStorageKeys, def = null): any | null {
    return this.map.get(key) || def;
  }

  setItem(key: GlobalStorageKeys, value) {
    this.map.set(key, value);
  }

  removeItem(key: GlobalStorageKeys) {
    this.map.delete(key);
  }

  hasItem(key: GlobalStorageKeys) {
    return this.map.has(key);
  }
}
