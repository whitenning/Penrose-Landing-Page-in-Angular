import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice',
})
export class FilterPricePipe implements PipeTransform {
  transform(values: any[], ...args: unknown[]): any[] {
    return values.filter((v) => v.price < 5);
  }
}
