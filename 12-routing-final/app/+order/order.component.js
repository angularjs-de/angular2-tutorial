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
var common_1 = require('@angular/common');
var cart_component_1 = require('../cart/cart.component');
var index_1 = require('../cart/index');
var index_2 = require('../+pizza/index');
var OrderComponent = (function () {
    function OrderComponent(cartService, pizzaService) {
        this.cartService = cartService;
        this.pizzaService = pizzaService;
        this.pizzas = [];
    }
    OrderComponent.prototype.routerOnActivate = function (currentRoute, previousRoute) {
        console.log(currentRoute, previousRoute);
    };
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pizzaService.getPizza().subscribe(function (pizzas) { return _this.pizzas = pizzas; });
    };
    OrderComponent.prototype.addToCart = function (pizza) {
        this.cartService.addCartItem({
            name: pizza.name,
            price: pizza.price
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OrderComponent.prototype, "search", void 0);
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'order',
            directives: [common_1.NgForm, cart_component_1.CartComponent],
            pipes: [index_2.PizzaSearchPipe],
            providers: [index_2.PizzaService],
            templateUrl: './app/+order/order.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.CartService, index_2.PizzaService])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map