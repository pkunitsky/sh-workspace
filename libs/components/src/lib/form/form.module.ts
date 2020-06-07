import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  imports: [
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
