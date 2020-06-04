import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShMockApiInterceptor } from './sh-mock-api.interceptor';
import { ShApiConfig, ShApiModule } from '@workspace-sense-hub/sh-api';

@NgModule({
  imports: [CommonModule, ShApiModule],
  exports: [ShApiModule]
})
export class ShMockApiModule {
  static forRoot(config: ShApiConfig): ModuleWithProviders {
    return {
      ngModule: ShApiModule,
      providers: [
        {provide: ShApiConfig, useValue: config},
        {provide: HTTP_INTERCEPTORS, useClass: ShMockApiInterceptor, multi: true}
      ]
    }
  }
}
