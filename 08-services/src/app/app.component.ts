import { Component } from '@angular/core';
import { PizzaService } from './shared/pizza.service';

@Component({
  selector: 'pizza-root',
  template: `
<span>Anzahl an Pizzen: {{pizzas.length}}</span>
  `
})
export class AppComponent {
  public pizzas: Array<any>;

  constructor(private pizzaService: PizzaService) {
    this.pizzas = this.pizzaService.getPizza();
  }
}
