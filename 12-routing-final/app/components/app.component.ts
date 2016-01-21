import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {OrderComponent} from './order/order.component';
import {AboutComponent} from './about/about.component';
import {NavigationComponent} from './navigation/navigation.component';


import {HTTP_PROVIDERS} from 'angular2/http';

import {CartService} from '../services/cart.service';

@RouteConfig([{
    path: '/order',
    component: OrderComponent,
    name: 'Order',
    useAsDefault: true
}, {
    path: '/about/...',
    component: AboutComponent,
    name: 'About'
}])

@Component({
    selector: 'pizza-app',
    directives: [ROUTER_DIRECTIVES, NavigationComponent],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, CartService],
    template: `
    <navigation></navigation>
    <router-outlet></router-outlet>
    `
})
export class PizzaAppComponent {}
