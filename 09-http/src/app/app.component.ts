import { Component } from '@angular/core';
import { PizzaService } from './shared/pizza.service';

@Component({
  selector: 'pizza-root',
  template: `
<span>Anzahl an Pizzen: {{pizzas?.length}}</span>
  `
})
export class AppComponent {
  public pizzas: Object[];

  constructor(private pizzaService: PizzaService) {
    this.loadData();
  }

  loadData() {
    this.pizzaService
      .getPizza()
      .subscribe((pizzas: Object[]) => this.pizzas = pizzas);
  }

}
