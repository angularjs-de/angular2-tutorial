import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {PizzaService} from '../services/pizza.service';
import {Pizza} from '../interfaces/pizza.interface';

@Component({
    selector: 'pizza-app',
    providers: [PizzaService, HTTP_PROVIDERS],
    template: `
    <span>Anzahl an Pizzen: {{pizzas.length}}</span>
    `
})
export class PizzaAppComponent {
    public pizzas:Pizza[] = [];

    constructor(private _pizzaService: PizzaService) {
    }

    ngOnInit() {
        this._pizzaService.getPizza().subscribe(pizzas => this.pizzas = pizzas);
    }
}
