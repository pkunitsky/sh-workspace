import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityAddActionComponent } from './entity-add-action/entity-add-action.component';
import { EntityDeleteActionComponent } from './entity-delete-action/entity-delete-action.component';
import { LoadingModule, SimpleConfirmationModule } from '@workspace-sense-hub/components';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../../../../../../../libs/components/src/lib/form/form.module';



@NgModule({
  declarations: [
    EntityAddActionComponent,
    EntityDeleteActionComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    ConfirmationPopoverModule,
    SimpleConfirmationModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule
  ],
  exports: [
    EntityAddActionComponent,
    EntityDeleteActionComponent
  ]
})
export class EntityActionsModule { }
