import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OopsEmptySearchComponent } from './oops-empty-search.component';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
  entryComponents: [OopsEmptySearchComponent],
  declarations: [
    OopsEmptySearchComponent
  ],
  imports: [
    DirectivesModule,
    CommonModule
  ],
  exports: [
    OopsEmptySearchComponent
  ]
})
export class OopsEmptySearchModule {
}
