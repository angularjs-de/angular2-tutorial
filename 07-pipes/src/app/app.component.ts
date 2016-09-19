import { Component } from '@angular/core';

@Component({
  selector: 'pizza-root',
  template: `
<p>{{10.99 | currency}}</p>
<p>{{10.99 | currency:'EUR':true}}</p>
<div>{{1 | addTwo}}</div>
  `
})
export class AppComponent {
  public search = 'Test';
}
