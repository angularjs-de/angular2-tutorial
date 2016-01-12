import {Component} from 'angular2/core';

@Component({
    selector: 'pizza-app',
    template : `
    <h1>Angular2 Tutorial von AngularJS.DE</h1>
    <form>
        <input type="text" [(ngModel)]="search">
        <p>Du suchst gerade nach: {{search}}</p>
    </form>
    `
})
export class PizzaAppComponent {
}
