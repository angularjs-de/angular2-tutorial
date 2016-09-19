import { Component } from '@angular/core';

@Component({
  selector: 'pizza-root',
  template: `
<button (click)="isVisible = !isVisible" redFont>anzeigen | verstecken</button>
<div *ngIf="isVisible" [style.color]="'red'">Wir sind Ihr Pizza-Dienstleister!</div>
  `
})
export class AppComponent {
  public isVisible: boolean = true;
}
