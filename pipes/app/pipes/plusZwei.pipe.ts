import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'plusZwei'})
export class PlusZweiPipe implements PipeTransform {
    transform(zahl:number, args:string[]) : any {
        return zahl + 2;
    }
}
