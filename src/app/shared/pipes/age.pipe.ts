import { Pipe, PipeTransform } from '@angular/core';
import { differenceInYears, parseISO } from 'date-fns';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birthday: string, suffix?: string): number | string {
    const age = differenceInYears(Date.now(), parseISO(birthday));
    return suffix ? `${age} ${suffix}` : age;
  }

}
