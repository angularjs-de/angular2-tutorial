import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {PizzaService} from '../services/pizza.service';

@Component({
    selector: 'pizza-app',
    providers: [PizzaService, HTTP_PROVIDERS],
    template: `
    <span>Anzahl an Pizzen: {{pizzas.length}}</span>
    `
})
export class PizzaAppComponent {
    public pizzas = [];

    constructor(private _pizzaService: PizzaService) {
        this.loadData();
    }
    
    loadData() {
        this._pizzaService.getPizza().subscribe(pizzas => this.pizzas = pizzas);
    }
}
