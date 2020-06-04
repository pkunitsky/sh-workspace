import { NgModule } from '@angular/core';
import { DelayDirective } from './delay.directive';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SvgSourceDirective } from './svg-source.directive';

@NgModule({
  declarations: [
    DelayDirective,
    SvgSourceDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DelayDirective,
    SvgSourceDirective
  ]
})
export class DirectivesModule {
}
