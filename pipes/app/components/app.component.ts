import {Component} from 'angular2/core';

import {PlusZweiPipe} from '../pipes/plusZwei.pipe';

@Component({
    selector: 'pizza-app',
    pipes: [PlusZweiPipe],
    template: `
    <span>{{10.99 | currency}}</span>
    <span>{{10.99 | currency:'EUR':true}}</span>
    <div>{{1 | plusZwei}}</div>
    `
})
export class PizzaAppComponent {
}
