import { Injectable } from '@angular/core';

export enum LocalStorageKeys {
  enableShMockApi = 'enableShMockApi'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  readonly keys = LocalStorageKeys;

  getItem(key: LocalStorageKeys, def = null): string | null {
    return localStorage.getItem(key) || def;
  }

  setItem(key: LocalStorageKeys, value) {
    localStorage.setItem(key, value);
  }

  removeItem(key: LocalStorageKeys) {
    localStorage.removeItem(key);
  }

  hasItem(key: LocalStorageKeys) {
    return localStorage.getItem(key) !== null;
  }
}
