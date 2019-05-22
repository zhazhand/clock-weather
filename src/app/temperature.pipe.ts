import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, args?: any): number {
    return Math.round(value - 273.15);
  }

}
