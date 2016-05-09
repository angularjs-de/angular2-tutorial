import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {OrderComponent} from './+order/index';
import {AboutComponent} from './+about/index';
import {PizzaComponent} from './+pizza/index';
import {NavigationComponent} from './shared/index';

import {CartService} from './cart/shared/index';

@Routes([{
    path: '/order',
    component: OrderComponent,
    // useAsDefault: true soon!
}, {
    path: '/about',
    component: AboutComponent
}, {
    path: '/pizza',
    component: PizzaComponent
}])

@Component({
    selector: 'pizza-app',
    directives: [ROUTER_DIRECTIVES, NavigationComponent],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, CartService],
    template: `
    <pizza-navigation></pizza-navigation>
    <router-outlet></router-outlet>
    `
})
export class PizzaAppComponent {
}
