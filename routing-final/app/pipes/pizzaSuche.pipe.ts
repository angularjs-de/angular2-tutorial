import {Pipe, PipeTransform} from 'angular2/core';
import {Pizza} from '../interfaces/pizza.interface';

@Pipe({name: 'pizzaSuche'})
export class PizzaSuchePipe implements PipeTransform {
    transform(pizzen:Pizza[], args:string[]) : any {
        var suchString = args[0],
            treffer = [];


        if (!suchString) {
            return pizzen;
        }

        pizzen.forEach(function (pizza) {
            if (pizza.name.match(new RegExp(suchString, 'i'))) {
                treffer.push(pizza);
            }
        });

        return treffer;
    }
}
