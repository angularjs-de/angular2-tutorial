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
var index_1 = require('../../cart/shared/index');
var NavigationComponent = (function () {
    function NavigationComponent(cartService) {
        this.cartService = cartService;
        this.cartUpdated = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.update.subscribe(function (update) {
            if (!update) {
                return;
            }
            _this.cartUpdated = true;
            setTimeout(function () {
                _this.cartUpdated = false;
            }, 500);
        });
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'pizza-navigation',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            template: "\n    <p class=\"well\">\n      <a [routerLink]=\"['Order']\">Start</a> | <a [routerLink]=\"['About']\">\u00DCber</a> | <a [routerLink]=\"['Pizza']\">Angebot</a>\n      <a class=\"pull-right\" *ngIf=\"cartUpdated\">Warekorb aktualisiert!</a>\n    </p>\n    "
        }), 
        __metadata('design:paramtypes', [index_1.CartService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map