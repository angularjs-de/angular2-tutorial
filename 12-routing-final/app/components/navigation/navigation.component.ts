import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CartService} from '../../services/cart.service';

@Component({
    selector: 'navigation',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <p class="well">
      <a [routerLink]="['Order']">Start</a> | <a [routerLink]="['About']">Über</a>
      <a class="pull-right" *ngIf="cartUpdated">Warekorb aktualisiert!</a>
    </p>
    `
})
export class NavigationComponent {
    public cartUpdated: boolean;
    constructor(private _cartService: CartService) {
        this.cartUpdated = false;
    }

    ngOnInit() {
        this._cartService.update.subscribe(update => {
            if (update) {
                var self = this;
                this.cartUpdated = true;
                setTimeout(function () {
                    self.cartUpdated = false;
                }, 500)
            }
        });
    }
}
