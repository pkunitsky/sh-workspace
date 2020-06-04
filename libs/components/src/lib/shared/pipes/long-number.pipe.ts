import { Pipe, PipeTransform } from '@angular/core';
import { notNullNotUndefined, toLongNumber } from '../utils';

@Pipe({
  name: 'longNumber'
})
export class LongNumberPipe implements PipeTransform {

  transform(value: string, def = ''): string {
    return notNullNotUndefined(value) ? toLongNumber(value) : def;
  }

}
