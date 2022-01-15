import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  transform(name: string): string {
    const names = name.split(' ');
    return names.length > 1 ? `${names.shift()} ${names.pop()}` : name;
  }

}
