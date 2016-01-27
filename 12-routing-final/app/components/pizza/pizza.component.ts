import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PizzaListComponent} from './list/list.component.ts';
import {PizzaDetailComponent} from './detail/detail.component.ts';

@RouteConfig([{
    path: 'list',
    component: PizzaListComponent,
    name: 'List'
}, {
    path: 'detail/:id',
    component: PizzaDetailComponent,
    name: 'Detail'
}])

@Component({
    selector: 'pizzaCmp',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
export class PizzaComponent {}
