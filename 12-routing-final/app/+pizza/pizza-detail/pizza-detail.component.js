"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('../shared/index');
var PizzaDetailComponent = (function () {
    function PizzaDetailComponent(pizzaService) {
        this.pizzaService = pizzaService;
    }
    PizzaDetailComponent.prototype.getPizza = function (pizzas) {
        for (var i = 0; i < pizzas.length; i = i + 1) {
            if (pizzas[i].id === this.pizzaId) {
                this.pizza = pizzas[i];
                return;
            }
        }
    };
    PizzaDetailComponent.prototype.routerOnActivate = function (currentRoute) {
        this.pizzaId = parseInt(currentRoute.getParam('id'), 10);
    };
    PizzaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pizzaService.getPizza().subscribe(function (pizzas) { return _this.getPizza(pizzas); });
    };
    PizzaDetailComponent = __decorate([
        core_1.Component({
            selector: 'pizza-detail',
            providers: [index_1.PizzaService],
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: './app/+pizza/pizza-detail/pizza-detail.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.PizzaService])
    ], PizzaDetailComponent);
    return PizzaDetailComponent;
}());
exports.PizzaDetailComponent = PizzaDetailComponent;
//# sourceMappingURL=pizza-detail.component.js.map