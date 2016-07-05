import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {PizzaListComponent} from './pizza-list/index';
import {PizzaDetailComponent} from './pizza-detail/index';

@RouteConfig([{
    path: '/',
    component: PizzaListComponent,
    name: 'PizzaIndex',
    useAsDefault: true
}, {
    path: '/detail/:id',
    name: 'PizzaDetail',
    component: PizzaDetailComponent
}])

@Component({
    selector: 'pizza-component',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
export class PizzaComponent {}
