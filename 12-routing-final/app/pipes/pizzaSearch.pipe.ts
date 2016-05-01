import {Pipe, PipeTransform} from 'angular2/core';
import {Pizza} from '../interfaces/pizza.interface';

@Pipe({name: 'pizzaSearch'})
export class PizzaSearchPipe implements PipeTransform {
    transform(pizzas:Pizza[], searchString: string) : any {
        var matches = [];

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
