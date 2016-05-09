import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {PizzaListComponent} from './pizza-list/index';
import {PizzaDetailComponent} from './pizza-detail/index';

@Routes([{
    path: '/',
    component: PizzaListComponent
}, {
    path: '/detail/:id',
    component: PizzaDetailComponent
}])

@Component({
    selector: 'pizza-component',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
export class PizzaComponent {}
