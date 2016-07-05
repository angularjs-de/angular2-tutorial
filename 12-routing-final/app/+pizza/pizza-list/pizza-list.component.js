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
var router_deprecated_1 = require('@angular/router-deprecated');
var index_1 = require('../shared/index');
var PizzaListComponent = (function () {
    function PizzaListComponent(pizzaService) {
        this.pizzaService = pizzaService;
        this.pizzas = [];
    }
    PizzaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pizzaService.getPizza().subscribe(function (pizzas) { return _this.pizzas = pizzas; });
    };
    PizzaListComponent = __decorate([
        core_1.Component({
            selector: 'pizza-list',
            providers: [index_1.PizzaService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            templateUrl: './app/+pizza/pizza-list/pizza-list.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.PizzaService])
    ], PizzaListComponent);
    return PizzaListComponent;
}());
exports.PizzaListComponent = PizzaListComponent;
//# sourceMappingURL=pizza-list.component.js.map