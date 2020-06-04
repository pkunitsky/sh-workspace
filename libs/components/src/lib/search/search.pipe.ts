import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(list: Array<string>, search: string): Array<string> {
    if (search) {
      return list.filter((value: string) => {
        return value.toLowerCase().trim().includes(search.toLowerCase().trim());
      });
    } else {
      return list;
    }
  }
}
