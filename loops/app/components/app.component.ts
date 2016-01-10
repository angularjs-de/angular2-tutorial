import {Component} from 'angular2/core';

@Component({
    selector: 'pizza-app',
    template: `
    <div *ngFor="#zahl of [1, 5, 34, 47]; #aktuellerIndex=index">
        Aktuelle Zahl ist: {{zahl}} ({{aktuellerIndex}})
    </div>
    `
})
export class PizzaAppComponent {
}
