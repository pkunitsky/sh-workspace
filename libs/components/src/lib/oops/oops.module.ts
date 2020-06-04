import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OopsNotFoundModule } from './oops-not-found/oops-not-found.module';
import { OopsEmptySearchModule } from './oops-empty-search/oops-empty-search.module';
import { OopsNoContentModule } from './oops-no-content/oops-no-content.module';


@NgModule({
  imports: [
    CommonModule,
    OopsNotFoundModule,
    OopsEmptySearchModule,
    OopsNoContentModule
  ],
  exports: [
    OopsNotFoundModule,
    OopsEmptySearchModule,
    OopsNoContentModule
  ]
})
export class OopsModule {
}
