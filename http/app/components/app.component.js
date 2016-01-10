System.register(['angular2/core', '../services/pizza.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pizza_service_1;
    var PizzaAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pizza_service_1_1) {
                pizza_service_1 = pizza_service_1_1;
            }],
        execute: function() {
            PizzaAppComponent = (function () {
                function PizzaAppComponent(_pizzaService) {
                    var _this = this;
                    this._pizzaService = _pizzaService;
                    this.pizzen = [];
                    this._pizzaService.ladeAngebot().subscribe(function (pizzen) { return _this.pizzen = pizzen; });
                }
                PizzaAppComponent = __decorate([
                    core_1.Component({
                        selector: 'pizza-app',
                        providers: [pizza_service_1.PizzaService],
                        template: "\n    <span>Anzahl an Pizzen: {{pizzen.length}}</span>\n    "
                    }), 
                    __metadata('design:paramtypes', [pizza_service_1.PizzaService])
                ], PizzaAppComponent);
                return PizzaAppComponent;
            })();
            exports_1("PizzaAppComponent", PizzaAppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map