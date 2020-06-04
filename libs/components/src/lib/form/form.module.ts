import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { DirectivesModule } from '../shared/directives/directives.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule
  ],
  declarations: [
    FormCheckboxComponent,
  ],
  exports: [
    FormCheckboxComponent
  ]
})
export class FormModule {
}
