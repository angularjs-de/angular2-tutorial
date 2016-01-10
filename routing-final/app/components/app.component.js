System.register(['angular2/core', 'angular2/router', './bestellung/bestellung.component', './ueber/ueber.component', './navigation/navigation.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, bestellung_component_1, ueber_component_1, navigation_component_1;
    var PizzaAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (bestellung_component_1_1) {
                bestellung_component_1 = bestellung_component_1_1;
            },
            function (ueber_component_1_1) {
                ueber_component_1 = ueber_component_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            }],
        execute: function() {
            PizzaAppComponent = (function () {
                function PizzaAppComponent() {
                }
                PizzaAppComponent = __decorate([
                    router_1.RouteConfig([{
                            path: '/bestellen',
                            component: bestellung_component_1.BestellungComponent,
                            name: 'Bestellung',
                            useAsDefault: true
                        }, {
                            path: '/ueber',
                            component: ueber_component_1.UeberComponent,
                            name: 'Ueber'
                        }]),
                    core_1.Component({
                        selector: 'pizza-app',
                        directives: [router_1.ROUTER_DIRECTIVES, navigation_component_1.NavigationComponent],
                        providers: [router_1.ROUTER_PROVIDERS],
                        template: "\n    <navigation></navigation>\n    <router-outlet></router-outlet>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PizzaAppComponent);
                return PizzaAppComponent;
            })();
            exports_1("PizzaAppComponent", PizzaAppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map