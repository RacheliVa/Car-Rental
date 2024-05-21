import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysOption'
})
export class DaysOptionPipe implements PipeTransform {

  transform(value: number): string {
   switch(value){
    case 1:return 'Sunday';
    case 2:return 'Monday';
    case 3:return 'Tuseday';
    case 4:return 'Wednesday';
    case 5:return 'Thursday';
    case 6:return 'Friday';
    case 7:return 'Saturday';
    case 8:return 'Sunday-Thursday';
    case 9:return 'All';
   }
  }

}
