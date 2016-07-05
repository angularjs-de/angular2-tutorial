import {Injectable, EventEmitter, Output} from '@angular/core';
import {CartItem} from './cart-item.model';

@Injectable()
export class CartService {
    @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();
    private cart: CartItem[] = [];

    getCart(): CartItem[] {
        return this.cart;
    }

    addCartItem(item: CartItem) {
        this.cart.push(item);
        this.update.next(true);
    }
}
