import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ms2minute'
})
export class Ms2minutePipe implements PipeTransform {

  transform(oldvalue: number): any {
    let value = Math.round(oldvalue / 1000);
    const minutes: number = Math.floor(value / 60);
    return minutes.toString().padStart(2, '0') + ':' + 
        (value - minutes * 60).toString().padStart(2, '0');
  }

}
