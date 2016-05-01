System.register(['angular2/core', 'angular2/router', '../../../services/pizza.service'], function(exports_1, context_1) {
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
    var core_1, router_1, pizza_service_1;
    var PizzaListComponent;
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
            PizzaListComponent = (function () {
                function PizzaListComponent(_pizzaService) {
                    this._pizzaService = _pizzaService;
                }
                PizzaListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._pizzaService.getPizza().subscribe(function (pizzas) { return _this.pizzas = pizzas; });
                };
                PizzaListComponent = __decorate([
                    core_1.Component({
                        selector: 'pizzaList',
                        providers: [pizza_service_1.PizzaService],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: './app/components/pizza/list/list.component.html'
                    }), 
                    __metadata('design:paramtypes', [pizza_service_1.PizzaService])
                ], PizzaListComponent);
                return PizzaListComponent;
            }());
            exports_1("PizzaListComponent", PizzaListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map