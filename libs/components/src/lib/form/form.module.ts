import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormInputComponent } from './form-input/form-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormCheckboxComponent,
    FormInputComponent
  ],
  exports: [
    FormCheckboxComponent,
    FormInputComponent
  ]
})
export class FormModule {
}
