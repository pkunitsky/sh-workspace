import { Pipe, PipeTransform } from '@angular/core';
import { toPrice } from '../utils';

@Pipe({
  name: 'currency'
})
export class PricePipe implements PipeTransform {

  transform(price: number): any {
    return price ? toPrice(price) : null;
  }

}
