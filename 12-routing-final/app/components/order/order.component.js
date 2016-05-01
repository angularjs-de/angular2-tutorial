System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../services/cart.service', '../../services/pizza.service', '../cart/cart.component.ts', '../../pipes/pizzaSearch.pipe.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, cart_service_1, pizza_service_1, cart_component_ts_1, pizzaSearch_pipe_ts_1;
    var OrderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (pizza_service_1_1) {
                pizza_service_1 = pizza_service_1_1;
            },
            function (cart_component_ts_1_1) {
                cart_component_ts_1 = cart_component_ts_1_1;
            },
            function (pizzaSearch_pipe_ts_1_1) {
                pizzaSearch_pipe_ts_1 = pizzaSearch_pipe_ts_1_1;
            }],
        execute: function() {
            OrderComponent = (function () {
                function OrderComponent(_cartService, _pizzaService) {
                    this._cartService = _cartService;
                    this._pizzaService = _pizzaService;
                }
                OrderComponent.prototype.routerOnActivate = function (nextInstruction, prevInstruction) {
                    console.log(nextInstruction, prevInstruction);
                };
                OrderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._pizzaService.getPizza().subscribe(function (pizzas) { return _this.pizzas = pizzas; });
                };
                OrderComponent.prototype.addToCart = function (pizza) {
                    this._cartService.addCartItem({
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
                        selector: 'bestellung',
                        directives: [common_1.NgForm, cart_component_ts_1.CartComponent],
                        pipes: [pizzaSearch_pipe_ts_1.PizzaSearchPipe],
                        providers: [pizza_service_1.PizzaService],
                        templateUrl: './app/components/order/order.component.html'
                    }),
                    router_1.CanActivate(function () {
                        // if false --> OrderComponente is not executed
                        return true;
                    }), 
                    __metadata('design:paramtypes', [cart_service_1.CartService, pizza_service_1.PizzaService])
                ], OrderComponent);
                return OrderComponent;
            }());
            exports_1("OrderComponent", OrderComponent);
        }
    }
});
//# sourceMappingURL=order.component.js.map