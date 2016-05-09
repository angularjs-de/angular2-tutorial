import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {Pizza, PizzaService} from '../shared/index';

@Component({
    selector: 'pizza-list',
    providers: [PizzaService],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/+pizza/pizza-list/pizza-list.component.html'
})
export class PizzaListComponent {
    public pizzas: Pizza[] = [];

    constructor(private pizzaService: PizzaService) {
    }

    ngOnInit() {
        this.pizzaService.getPizza().subscribe(pizzas => this.pizzas = pizzas);
    }
}
