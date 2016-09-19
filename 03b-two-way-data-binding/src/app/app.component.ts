import { Component } from '@angular/core';

@Component({
  selector: 'pizza-root',
  template: `
<input 
  type="text"
  [(ngModel)]="search" >
<p>
  Du suchst gerade nach: 
  {{search}}
</p>
  `
})
export class AppComponent { }
