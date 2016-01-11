import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'addTwo'})
export class AddTwoPipe implements PipeTransform {
    transform(number:number, args:string[]) : any {
        return number + 2;
    }
}
