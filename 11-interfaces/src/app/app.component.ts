import { Component, OnInit } from '@angular/core';
import { PizzaService } from './shared/pizza.service';
import { Pizza } from './shared/pizza';

@Component({
  selector: 'pizza-root',
  template: `
<span>Anzahl an Pizzen: {{pizzas?.length}}</span>
  `
})
export class AppComponent implements OnInit {
  public pizzas: Pizza[];

  constructor(
    private pizzaService: PizzaService
  ) { }

  ngOnInit() {
    this.pizzaService
      .getPizza()
      .subscribe(pizzas => this.pizzas = pizzas);
  }
}
