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

  {{search.toUpperCase() + "!"}} oder {{1 + 2 + 3}}
  {{search.length === 3 ? "ausgebucht" : "noch frei"}}
  {{search.length || 0}}
</p>
  `
})
export class AppComponent {
  public search = 'Test';
}
