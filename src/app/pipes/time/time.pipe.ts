import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    const hour: number = Math.floor(value / 60);
    const minutes: number = value % 60;
    if (hour === 0) {
      return `${minutes} m`
    }
    if (minutes === 0) {
      return `${hour} h`
      
    }
    return `${hour}h   ${minutes}m`
  }

}
