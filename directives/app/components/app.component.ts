import {Component} from 'angular2/core';

import {RedFontDirective} from '../directives/redFont.directive';

@Component({
    selector: 'pizza-app',
    directives: [RedFontDirective],
    template: `
    <button (click)="isvisible = !isvisible" redFont>anzeigen | verstecken</button>
    <div *ngIf="isvisible" [style.color]="'red'">Wir sind Ihr Pizza-Dienstleister!</div>
    `
})
export class PizzaAppComponent {
    public isvisible:boolean = true;
}
