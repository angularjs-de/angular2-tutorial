import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {OrderComponent} from './+order/index';
import {AboutComponent} from './+about/index';
import {PizzaComponent} from './+pizza/index';
import {NavigationComponent} from './shared/index';

import {CartService} from './cart/shared/index';

@RouteConfig([{
    path: '/order',
    component: OrderComponent,
    name: 'Order',
    useAsDefault: true
}, {
    path: '/about',
    name: 'About',
    component: AboutComponent
}, {
    path: '/pizza/...',
    name: 'Pizza',
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
