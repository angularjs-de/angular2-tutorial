import {Component, Input, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {CanActivate} from 'angular2/router';

import {CartService} from '../../services/cart.service';
import {PizzaService} from '../../services/pizza.service';

import {CartComponent} from '../cart/cart.component.ts';

import {PizzaSearchPipe} from '../../pipes/pizzaSearch.pipe.ts';
import {Pizza} from '../../interfaces/pizza.interface.ts';

@Component({
    selector: 'bestellung',
    directives: [NgForm, CartComponent],
    pipes: [PizzaSearchPipe],
    providers: [PizzaService],
    templateUrl: './app/components/order/order.component.html'
})
@CanActivate(() => {
    // if false --> OrderComponente is not executed
    return true;
})
export class OrderComponent {
    @Input() search: string;
    public pizzas: Pizza[];

    constructor(private _cartService: CartService, private _pizzaService: PizzaService) {
    }

    routerOnActivate() {
        console.log(arguments);
    }

    ngOnInit() {
        this._pizzaService.getPizza().subscribe(pizzas => this.pizzas = pizzas);
    }

    addToCart(pizza: Pizza) {
        this._cartService.addCartItem({
            name: pizza.name,
            price: pizza.price
        });
    }
}
