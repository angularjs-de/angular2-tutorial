import {Component, OnInit} from 'angular2/core';

import {CartService} from '../../services/cart.service';
import {CartItem} from '../../interfaces/cartItem.interface';

@Component({
    selector: 'cart',
    templateUrl: './app/components/cart/cart.component.html',
    styleUrls: ['./app/components/cart/cart.component.css']
})
export class CartComponent {
    public currentCart: CartItem[];

    constructor(private _cartService: CartService) {
    }

    getCart() {
        this.currentCart = this._cartService.getCart();
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
