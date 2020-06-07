import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ShMockApiInterceptor } from './services/sh-mock-api.interceptor';
import { ShApiModule } from '@workspace-sense-hub/sh-api';
import { ApiSwitcherComponent } from './api-switcher/api-switcher.component';
import { ApiLoggerInterceptor } from './services/api-logger.interceptor';

@NgModule({
  declarations: [
    ApiSwitcherComponent
  ],
  imports: [
    CommonModule,
    ShApiModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiLoggerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ShMockApiInterceptor, multi: true }
  ],
  exports: [
    HttpClientModule,
    ApiSwitcherComponent
  ]
})
export class ShMockApiModule {
}
