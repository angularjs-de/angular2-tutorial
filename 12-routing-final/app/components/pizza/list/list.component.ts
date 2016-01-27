import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {PizzaService} from '../../../services/pizza.service';

import {Pizza} from '../../../interfaces/pizza.interface.ts';

@Component({
    selector: 'pizzaList',
    providers: [PizzaService],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/components/pizza/list/list.component.html'
})
export class PizzaListComponent {
    public pizzas: Pizza[];

    constructor(private _pizzaService: PizzaService) {
    }

    ngOnInit() {
        this._pizzaService.getPizza().subscribe(pizzas => this.pizzas = pizzas);
    }
}
