import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleConfirmationComponent } from './simple-confirmation.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


@NgModule({
  declarations: [SimpleConfirmationComponent],
  imports: [
    CommonModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'success'})
  ],
  exports: [SimpleConfirmationComponent]
})
export class SimpleConfirmationModule {
}
