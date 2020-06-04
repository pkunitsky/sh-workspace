import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesTableComponent } from './entities-table.component';
import { DataTableModule } from './data-table/data-table.module';
import { LoadingModule, OopsModule } from '@workspace-sense-hub/components';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AddEntityModalModule } from './add-entity-modal/add-entity-modal.module';



@NgModule({
  declarations: [EntitiesTableComponent],
  imports: [
    CommonModule,
    DataTableModule,
    LoadingModule,
    OopsModule,
    PerfectScrollbarModule,
    AddEntityModalModule
  ],
  exports: [
    EntitiesTableComponent
  ]
})
export class EntitiesTableModule { }
