import {Component} from '@angular/core';

import {AddTwoPipe} from './shared/index';

@Component({
    selector: 'pizza-app',
    pipes: [AddTwoPipe],
    template: `
    <span>{{10.99 | currency}}</span>
    <span>{{10.99 | currency:'EUR':true}}</span>
    <div>{{1 | addTwo}}</div>
    `
})
export class PizzaAppComponent {
}
