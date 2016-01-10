import {Component} from 'angular2/core';

import {PizzaService} from '../services/pizza.service';

@Component({
    selector: 'pizza-app',
    providers: [PizzaService],
    template: `
    <span>Anzahl an Pizzen: {{pizzen.length}}</span>
    `
})
export class PizzaAppComponent {
    public pizzen = [];

    constructor(private _pizzaService: PizzaService) {
        this._pizzaService.ladeAngebot().subscribe(pizzen => this.pizzen = pizzen);
    }
}
