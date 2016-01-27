System.register(['angular2/core', 'angular2/router', '../../../services/pizza.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, pizza_service_1;
    var PizzaDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pizza_service_1_1) {
                pizza_service_1 = pizza_service_1_1;
            }],
        execute: function() {
            PizzaDetailComponent = (function () {
                function PizzaDetailComponent(_pizzaService, _routeParams) {
                    this._pizzaService = _pizzaService;
                    this._routeParams = _routeParams;
                    this._pizzaId = parseInt(_routeParams.get('id'), 10);
                }
                PizzaDetailComponent.prototype._getPizza = function (pizzas) {
                    var i = 0;
                    for (i; i < pizzas.length; i = i + 1) {
                        if (pizzas[i].id === this._pizzaId) {
                            this.pizza = pizzas[i];
                            return;
                        }
                    }
                };
                PizzaDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._pizzaService.getPizza().subscribe(function (pizzas) { return _this._getPizza(pizzas); });
                };
                PizzaDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'pizzaDetail',
                        providers: [pizza_service_1.PizzaService],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: './app/components/pizza/detail/detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [pizza_service_1.PizzaService, router_1.RouteParams])
                ], PizzaDetailComponent);
                return PizzaDetailComponent;
            })();
            exports_1("PizzaDetailComponent", PizzaDetailComponent);
        }
    }
});
//# sourceMappingURL=detail.component.js.map