import {Component} from '@angular/core';

import {PizzaService} from './shared/index';

@Component({
    selector: 'pizza-app',
    providers: [PizzaService],
    template: `
    <span>Anzahl an Pizzen: {{pizzas.length}}</span>
    `
})
export class PizzaAppComponent {
    public pizzas = <Object>[];

    constructor(private pizzaService: PizzaService) {
        this.pizzas = this.pizzaService.getPizza();
    }
}
