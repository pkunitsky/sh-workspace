import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticUiTestComponent } from './semantic-ui-test.component';



@NgModule({
  declarations: [SemanticUiTestComponent],
  exports: [
    SemanticUiTestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SemanticUiTestModule { }
