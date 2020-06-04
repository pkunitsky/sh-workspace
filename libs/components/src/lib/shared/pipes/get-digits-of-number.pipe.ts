import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDigitsOfNumber'
})
export class GetDigitsOfNumberPipe implements PipeTransform {

  transform(number: any): Array<string> {
    if (number && number.toString()) {
      return Array.from(number.toString());
    } else {
      return [];
    }
  }

}
