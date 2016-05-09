import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {CartService} from '../../cart/shared/index';

@Component({
    selector: 'pizza-navigation',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <p class="well">
      <a [routerLink]="['/order']">Start</a> | <a [routerLink]="['/about']">Über</a> | <a [routerLink]="['/pizza']">Angebot</a>
      <a class="pull-right" *ngIf="cartUpdated">Warekorb aktualisiert!</a>
    </p>
    `
})
export class NavigationComponent {
    public cartUpdated: boolean;
    constructor(private cartService: CartService) {
        this.cartUpdated = false;
    }

    ngOnInit() {
        this.cartService.update.subscribe((update: boolean) => {
            if (!update) {
                return;
            }
            this.cartUpdated = true;
            setTimeout(() => {
                this.cartUpdated = false;
            }, 500)
        });
    }
}
