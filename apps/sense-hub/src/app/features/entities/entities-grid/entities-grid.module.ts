import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from './entities-grid/grid/grid.module';
import { LoadingModule, OopsModule } from '@workspace-sense-hub/components';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EntitiesGridComponent } from './entities-grid/entities-grid.component';
import { EntityActionsModule } from '../entity-actions/entity-actions.module';
import { ApiLoggerModule } from '../../../../../../../libs/logging/src/lib/api-logger/api-logger.module';


@NgModule({
  declarations: [
    EntitiesGridComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    LoadingModule,
    OopsModule,
    PerfectScrollbarModule,
    ApiLoggerModule,
    EntityActionsModule
  ],
  exports: [
    EntitiesGridComponent
  ]
})
export class EntitiesGridModule {
}
