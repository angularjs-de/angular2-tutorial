import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {PizzaService} from '../../../services/pizza.service';

import {Pizza} from '../../../interfaces/pizza.interface.ts';

@Component({
    selector: 'pizzaDetail',
    providers: [PizzaService],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/components/pizza/detail/detail.component.html'
})
export class PizzaDetailComponent {
    public pizza: Pizza;
    private _pizzaId: Number
    private _getPizza(pizzas: Array<Pizza>) {
        var i = 0;

        for (i; i < pizzas.length; i = i + 1) {
            if (pizzas[i].id === this._pizzaId) {
                this.pizza = pizzas[i];

                return;
            }
        }
    }

    constructor(private _pizzaService: PizzaService, private _routeParams: RouteParams) {
        this._pizzaId = parseInt(_routeParams.get('id'), 10);
    }

    ngOnInit() {
        this._pizzaService.getPizza().subscribe(pizzas => this._getPizza(pizzas));
    }
}
