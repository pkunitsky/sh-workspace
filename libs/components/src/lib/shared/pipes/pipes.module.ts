import { NgModule } from '@angular/core';
import { GetDigitsOfNumberPipe } from './get-digits-of-number.pipe';
import { LongNumberPipe } from './long-number.pipe';
import { PricePipe } from './price.pipe';

@NgModule({
  declarations: [
    GetDigitsOfNumberPipe,
    LongNumberPipe,
    PricePipe,
  ],
  exports: [
    GetDigitsOfNumberPipe,
    LongNumberPipe,
    PricePipe,
  ]
})
export class PipesModule {
}
