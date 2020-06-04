import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OopsNoContentComponent } from './oops-no-content.component';
import { DirectivesModule } from '../../shared/directives/directives.module';



@NgModule({
  declarations: [
    OopsNoContentComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    CommonModule
  ],
  exports: [
    OopsNoContentComponent
  ]
})
export class OopsNoContentModule { }
