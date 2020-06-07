import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridTheadComponent } from './grid-thead/grid-thead.component';
import { GridTrComponent } from './grid-tr/grid-tr.component';
import { GridTdComponent } from './grid-td/grid-td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridTableComponent } from './grid-table/grid-table.component';
import { GridThComponent } from './grid-th/grid-th.component';
import { GridTbodyComponent } from './grid-tbody/grid-tbody.component';
import { SimpleConfirmationModule } from '@workspace-sense-hub/components';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';



@NgModule({
  declarations: [
    GridTheadComponent,
    GridThComponent,
    GridTbodyComponent,
    GridTrComponent,
    GridTableComponent,
    GridTdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleConfirmationModule,
    ConfirmationPopoverModule
  ],
  exports: [
    GridTheadComponent,
    GridThComponent,
    GridTbodyComponent,
    GridTrComponent,
    GridTdComponent,
    GridTableComponent
  ]
})
export class GridModule { }
