import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiLoggerComponent } from './api-logger.component';
import { MomentModule } from 'ngx-moment';
import { ShMockApiModule } from '@workspace-sense-hub/sh-mock-api';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  declarations: [ApiLoggerComponent],
  imports: [
    CommonModule,
    MomentModule,
    ShMockApiModule,
    PerfectScrollbarModule
  ],
  exports: [
    ApiLoggerComponent
  ]
})
export class ApiLoggerModule {
}
