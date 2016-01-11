import {Injectable, EventEmitter, Output} from 'angular2/core';
import {CartItem} from '../interfaces/cartItem.interface';

@Injectable()
export class CartService {
    @Output() update: EventEmitter<boolean> = new EventEmitter();
    private cart: CartItem[] = [];

    getCart() {
        return this.cart;
    }

    addCartItem(item: CartItem) {
        this.cart.push(item);
        this.update.next(true);
    }
}
