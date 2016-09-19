import { Component } from '@angular/core';

@Component({
  selector: 'pizza-root',
  template: `
<div *ngFor="let number of [1, 5, 34, 47]; let currentIndex=index">
  Aktuelle Zahl ist: {{number}} ({{currentIndex}})
</div>
  `
})
export class AppComponent {
  public search = 'Test';
}
