import {Component, Input, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {CanActivate} from 'angular2/router';

import {WarenkorbService} from '../../services/warenkorb.service';
import {PizzaService} from '../../services/pizza.service';

import {WarenkorbComponent} from '../warenkorb/warenkorb.component.ts';

import {PizzaSuchePipe} from '../../pipes/pizzaSuche.pipe.ts';
import {Pizza} from '../../interfaces/pizza.interface.ts';

@Component({
    selector: 'bestellung',
    directives: [NgForm, WarenkorbComponent],
    pipes: [PizzaSuchePipe],
    providers: [PizzaService],
    templateUrl: './app/components/bestellung/bestellung.component.html'
})
@CanActivate(() => {
    // falls false --> BestellungComponente nicht ausgeführt
    return true;
})
export class BestellungComponent {
    @Input() suche: string;
    public pizzen: Pizza[];

    constructor(private _warenkorbService: WarenkorbService, private _pizzaService: PizzaService) {
    }

    routerOnActivate() {
        console.log(arguments);
    }

    ngOnInit() {
        this._pizzaService.ladeAngebot().subscribe(pizzen => this.pizzen = pizzen);
    }

    zumWarenkorb(pizza: Pizza) {
        this._warenkorbService.addWarenkorb({
            name: pizza.name,
            preis: pizza.preis
        });
    }
}
