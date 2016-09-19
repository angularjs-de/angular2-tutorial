import { Component, OnInit } from '@angular/core';
import { PizzaService } from './shared/pizza.service';

@Component({
  selector: 'pizza-root',
  template: `
<span>Anzahl an Pizzen: {{pizzas?.length}}</span>
  `
})
export class AppComponent implements OnInit {
  public pizzas: Object[];

  constructor(
    private pizzaService: PizzaService
  ) { }

  ngOnInit() {
    this.pizzaService
      .getPizza()
      .subscribe((pizzas: Object[]) => this.pizzas = pizzas);
  }

}
