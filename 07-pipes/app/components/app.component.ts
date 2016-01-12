import {Component} from 'angular2/core';

import {AddTwoPipe} from '../pipes/addTwo.pipe';

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
