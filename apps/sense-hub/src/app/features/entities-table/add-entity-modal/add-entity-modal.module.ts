import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule, ModalModule } from '@workspace-sense-hub/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEntityModalComponent } from './add-entity-modal.component';



@NgModule({
  declarations: [AddEntityModalComponent],
  exports: [
    AddEntityModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule
  ]
})
export class AddEntityModalModule { }
