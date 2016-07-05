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
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var index_1 = require('./+order/index');
var index_2 = require('./+about/index');
var index_3 = require('./+pizza/index');
var index_4 = require('./shared/index');
var index_5 = require('./cart/shared/index');
var PizzaAppComponent = (function () {
    function PizzaAppComponent() {
    }
    PizzaAppComponent = __decorate([
        router_deprecated_1.RouteConfig([{
                path: '/order',
                component: index_1.OrderComponent,
                name: 'Order',
                useAsDefault: true
            }, {
                path: '/about',
                name: 'About',
                component: index_2.AboutComponent
            }, {
                path: '/pizza/...',
                name: 'Pizza',
                component: index_3.PizzaComponent
            }]),
        core_1.Component({
            selector: 'pizza-app',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, index_4.NavigationComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, index_5.CartService],
            template: "\n    <pizza-navigation></pizza-navigation>\n    <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PizzaAppComponent);
    return PizzaAppComponent;
}());
exports.PizzaAppComponent = PizzaAppComponent;
//# sourceMappingURL=app.component.js.map