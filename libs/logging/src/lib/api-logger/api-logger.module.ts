import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiLoggerComponent } from './api-logger.component';
import { MomentModule } from 'ngx-moment';
import { ShMockApiModule } from '@workspace-sense-hub/sh-mock-api';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SemanticUiModule } from '../../../../../apps/sense-hub/src/app/features/test/semantic-ui-test/semantic-ui/semantic-ui.module';


@NgModule({
  declarations: [ApiLoggerComponent],
  imports: [
    CommonModule,
    MomentModule,
    ShMockApiModule,
    PerfectScrollbarModule,
    SemanticUiModule
  ],
  exports: [
    ApiLoggerComponent
  ]
})
export class ApiLoggerModule {
}
