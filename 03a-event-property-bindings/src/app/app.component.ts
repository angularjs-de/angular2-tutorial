import { Component } from '@angular/core';

@Component({
  selector: 'pizza-root',
  template: `
<input 
  type="text"
  (keyup)="onKeyUp()"
  (input)="color = $event.target.value"
  [style.background-color]="color">
  `
})
export class AppComponent {
  public color: string;
  onKeyUp() {
    console.log('keyup: ' + this.color);
  }
}
