import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityViewModalComponent } from './entity-view-modal.component';
import { ModalModule } from '@workspace-sense-hub/components';



@NgModule({
  declarations: [EntityViewModalComponent],
  exports: [
    EntityViewModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ]
})
export class EntityViewModalModule { }
