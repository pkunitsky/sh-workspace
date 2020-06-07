import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShApiConfig } from '@workspace-sense-hub/sh-api';

@Injectable({
  providedIn: 'root'
})
export class ShMockApiService {
  readonly apiBase = `${window.location.origin}/`;

  constructor(private config: ShApiConfig) {
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

  public formatRequestUrl(request): string {
    if (this.isEnabled) {
      return request.url.replace(this.apiBase, '');
    }

    return request.url.replace(this.config.apiBase, '');
  }
}
