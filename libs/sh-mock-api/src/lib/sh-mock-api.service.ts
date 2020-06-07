import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShMockApiService {

  constructor() {
  }

  readonly isEnabled$ = new BehaviorSubject(true);

  get isEnabled(): boolean {
    return this.isEnabled$.getValue();
  }

  set isEnabled(v: boolean) {
    this.isEnabled$.next(v);
  }

  public enable() {
    this.isEnabled = true;
  }

  public disable() {
    this.isEnabled = false;
  }
}
