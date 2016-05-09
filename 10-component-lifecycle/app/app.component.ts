import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {PizzaService} from './shared/index';

@Component({
    selector: 'pizza-app',
    providers: [PizzaService, HTTP_PROVIDERS],
    template: `
    <span>Anzahl an Pizzen: {{pizzas.length}}</span>
    `
})
export class PizzaAppComponent implements OnInit {
    public pizzas = <Object>[];

    constructor(private _pizzaService: PizzaService) {
    }

    ngOnInit() {
        this._pizzaService.getPizza().subscribe((pizzas: Array<Object>) => this.pizzas = pizzas);
    }
}
