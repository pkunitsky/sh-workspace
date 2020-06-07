import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesGridModule } from '../entities-grid/entities-grid.module';
import { EntitiesComponent } from './entities.component';
import { EntityActionsModule } from '../entity-actions/entity-actions.module';
import { ShMockApiModule } from '@workspace-sense-hub/sh-mock-api';
import { ApiLoggerModule } from '../../../../../../../libs/logging/src/lib/api-logger/api-logger.module';

@NgModule({
  declarations: [
    EntitiesComponent
  ],
  imports: [
    CommonModule,
    EntitiesGridModule,
    ApiLoggerModule,
    EntityActionsModule,
    EntitiesRoutingModule,
    ShMockApiModule
  ]
})
export class EntitiesModule {
}
