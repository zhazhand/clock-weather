import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windPipe'
})
export class WindPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if (value === 0 || value === 360) {
      return 'North';
    } else if(value === 90) {
      return 'East';
    } else if (value === 180) {
      return 'South';
    } else if (value === 270) {
      return 'West';
    } else if (value > 0 && value < 90) {
      return 'North-east'
    } else if (value > 90 && value < 180) {
      return 'Southeast'
    } else if (value > 180 && value < 270) {
      return 'South-west'
    } else {
      return 'North-west'
    }
  }

}
