import {Component, OnInit} from '@angular/core';

import {CartService} from './shared/index';
import {CartItem} from './shared/cart-item.model';

@Component({
    selector: 'pizza-cart',
    templateUrl: './app/cart/cart.component.html',
    styleUrls: ['./app/cart/cart.component.css']
})
export class CartComponent {
    public currentCart: CartItem[];

    constructor(private cartService: CartService) {
    }

    getCart() {
        this.currentCart = this.cartService.getCart();
    }

    ngOnInit() {
        this.getCart();
    }

    calcTotalSum() {
        let sum = 0;

        this.currentCart.forEach(function (cartItem) {
            sum = sum + cartItem.price;
        });

        return sum;
    }
}
