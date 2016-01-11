import {Component} from 'angular2/core';

@Component({
    selector: 'pizza-app',
    template: `
    <div *ngFor="#number of [1, 5, 34, 47]; #currentIndex=index">
        Aktuelle Zahl ist: {{number}} ({{currentIndex}})
    </div>
    `
})
export class PizzaAppComponent {
}
