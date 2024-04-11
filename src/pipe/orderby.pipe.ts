import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  standalone: true
})
export class OrderbyPipe implements PipeTransform {

  transform(array: any[], key: string, reverse: boolean = false): any[] {
    if (!Array.isArray(array) || key === '') {
      return array;
    }

    return array.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return (x < y ? -1 : 1) * (reverse ? -1 : 1);
    });
  }

}
