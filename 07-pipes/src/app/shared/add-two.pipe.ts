import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTwo'
})
export class AddTwoPipe implements PipeTransform {

  transform(number: number): any {
    return number + 2;
  }

}
