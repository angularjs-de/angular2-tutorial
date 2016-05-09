import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/common';
import {OnActivate, RouteSegment} from '@angular/router';

import {CartComponent} from '../cart/cart.component';
import {CartService} from '../cart/index';
import {Pizza, PizzaSearchPipe, PizzaService} from '../+pizza/index';

@Component({
    selector: 'order',
    directives: [NgForm, CartComponent],
    pipes: [PizzaSearchPipe],
    providers: [PizzaService],
    templateUrl: './app/+order/order.component.html'
})
export class OrderComponent implements OnActivate {
    @Input() search: string;
    public pizzas: Pizza[] = [];

    constructor(private cartService: CartService, private pizzaService: PizzaService) {
    }

    routerOnActivate(currentRoute: RouteSegment, previousRoute: RouteSegment) {
        console.log(currentRoute, previousRoute);
    }

    ngOnInit() {
        this.pizzaService.getPizza().subscribe(pizzas => this.pizzas = pizzas);
    }

    addToCart(pizza: Pizza) {
        this.cartService.addCartItem({
            name: pizza.name,
            price: pizza.price
        });
    }
}
