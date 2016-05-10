import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {Pizza, PizzaService} from './shared/index';

@Component({
    selector: 'pizza-app',
    providers: [PizzaService, HTTP_PROVIDERS],
    template: `
    <span>Anzahl an Pizzen: {{pizzas?.length || 0}}</span>
    `
})
export class PizzaAppComponent {
    public pizzas: Pizza[];

    constructor(private pizzaService: PizzaService) {
    }

    ngOnInit() {
        this.pizzaService.getPizza().subscribe((pizzas: Pizza[]) => this.pizzas = pizzas);
    }
}
