import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableTheadComponent } from './data-table-thead/data-table-thead.component';
import { DataTableThComponent } from './data-table-th/data-table-th.component';
import { DataTableTbodyComponent } from './data-table-tbody/data-table-tbody.component';
import { DataTableTrComponent } from './data-table-tr/data-table-tr.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTableTdComponent } from './data-table-td/data-table-td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataTableTheadComponent,
    DataTableThComponent,
    DataTableTbodyComponent,
    DataTableTrComponent,
    DataTableComponent,
    DataTableTdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DataTableTheadComponent,
    DataTableThComponent,
    DataTableTbodyComponent,
    DataTableTrComponent,
    DataTableTdComponent,
    DataTableComponent
  ]
})
export class DataTableModule { }
