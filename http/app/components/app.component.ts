import {Component} from 'angular2/core';

import {PizzaService} from '../services/pizza.service';

@Component({
    selector: 'pizza-app',
    providers: [PizzaService],
    template: `
    <span>Anzahl an Pizzen: {{pizzas.length}}</span>
    `
})
export class PizzaAppComponent {
    public pizzas = [];

    constructor(private _pizzaService: PizzaService) {
        this._pizzaService.getPizza().subscribe(pizzas => this.pizzas = pizzas);
    }
}
