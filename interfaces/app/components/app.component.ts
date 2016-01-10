import {Component} from 'angular2/core';

import {PizzaService} from '../services/pizza.service';
import {Pizza} from '../interfaces/pizza.interface';

@Component({
    selector: 'pizza-app',
    providers: [PizzaService],
    template: `
    <span>Anzahl an Pizzen: {{pizzen.length}}</span>
    `
})
export class PizzaAppComponent {
    public pizzen:Pizza[] = [];

    constructor(private _pizzaService: PizzaService) {
    }

    ngOnInit() {
        this._pizzaService.ladeAngebot().subscribe(pizzen => this.pizzen = pizzen);
    }
}
