import {Component} from '@angular/core';

import {RedFontDirective} from './shared/index';

@Component({
    selector: 'pizza-app',
    directives: [RedFontDirective],
    template: `
    <button (click)="isVisible = !isVisible" redFont>anzeigen | verstecken</button>
    <div *ngIf="isVisible" [style.color]="'red'">Wir sind Ihr Pizza-Dienstleister!</div>
    `
})
export class PizzaAppComponent {
    public isVisible:boolean = true;
}
