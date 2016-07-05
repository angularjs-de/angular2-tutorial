import {Component, OnInit} from '@angular/core';
import {OnActivate, ComponentInstruction, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Pizza, PizzaService} from '../shared/index';

@Component({
    selector: 'pizza-detail',
    providers: [PizzaService],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/+pizza/pizza-detail/pizza-detail.component.html'
})
export class PizzaDetailComponent implements OnInit, OnActivate {
    public pizza: Pizza;
    private pizzaId: Number;
    private getPizza(pizzas: Pizza[]) {
        for (let i = 0; i < pizzas.length; i = i + 1) {
            if (pizzas[i].id === this.pizzaId) {
                this.pizza = pizzas[i];

                return;
            }
        }
    }

    constructor(private pizzaService: PizzaService) {
    }

    routerOnActivate(currentRoute: ComponentInstruction) {
        this.pizzaId = parseInt(currentRoute.params['id'], 10);
    }

    ngOnInit() {
        this.pizzaService.getPizza().subscribe(pizzas => this.getPizza(pizzas));
    }
}
