import {Component} from 'angular2/core';

@Component({
    selector: 'pizza-app',
    template: `
    <input type="text" (keyup)="onKeyUp()" (input)="color=$event.target.value" [style.background-color]="color">
    `
})
export class PizzaAppComponent {
    public color: string;
    onKeyUp() {
        console.log('keyup: ' + this.color)
    }
}
