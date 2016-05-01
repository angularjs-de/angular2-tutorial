System.register(['angular2/core', 'angular2/router', './list/list.component.ts', './detail/detail.component.ts'], function(exports_1, context_1) {
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
    var core_1, router_1, list_component_ts_1, detail_component_ts_1;
    var PizzaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (list_component_ts_1_1) {
                list_component_ts_1 = list_component_ts_1_1;
            },
            function (detail_component_ts_1_1) {
                detail_component_ts_1 = detail_component_ts_1_1;
            }],
        execute: function() {
            PizzaComponent = (function () {
                function PizzaComponent() {
                }
                PizzaComponent = __decorate([
                    router_1.RouteConfig([{
                            path: 'list',
                            component: list_component_ts_1.PizzaListComponent,
                            name: 'List'
                        }, {
                            path: 'detail/:id',
                            component: detail_component_ts_1.PizzaDetailComponent,
                            name: 'Detail'
                        }]),
                    core_1.Component({
                        selector: 'pizzaCmp',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: '<router-outlet></router-outlet>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PizzaComponent);
                return PizzaComponent;
            }());
            exports_1("PizzaComponent", PizzaComponent);
        }
    }
});
//# sourceMappingURL=pizza.component.js.map