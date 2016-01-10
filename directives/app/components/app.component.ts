import {Component} from 'angular2/core';

import {SchriftRotDirective} from '../directives/schriftRot.directive';

@Component({
    selector: 'pizza-app',
    directives: [SchriftRotDirective],
    template: `
    <button (click)="istSichtbar = !istSichtbar" schriftRot>anzeigen | verstecken</button>
    <div *ngIf="istSichtbar" [style.color]="'red'">Wir sind Ihr Pizza-Dienstleister!</div>
    `
})
export class PizzaAppComponent {
    public istSichtbar:boolean = true;
}
