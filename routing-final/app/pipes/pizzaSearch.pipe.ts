import {Pipe, PipeTransform} from 'angular2/core';
import {Pizza} from '../interfaces/pizza.interface';

@Pipe({name: 'pizzaSearch'})
export class PizzaSearchPipe implements PipeTransform {
    transform(pizzas:Pizza[], args:string[]) : any {
        var searchString = args[0],
            matches = [];


        if (!searchString) {
            return pizzas;
        }

        pizzas.forEach(function (pizza) {
            if (pizza.name.match(new RegExp(searchString, 'i'))) {
                matches.push(pizza);
            }
        });

        return matches;
    }
}
