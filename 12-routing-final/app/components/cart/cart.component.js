System.register(['angular2/core', '../../services/cart.service'], function(exports_1, context_1) {
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
    var core_1, cart_service_1;
    var CartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            }],
        execute: function() {
            CartComponent = (function () {
                function CartComponent(_cartService) {
                    this._cartService = _cartService;
                }
                CartComponent.prototype.getCart = function () {
                    this.currentCart = this._cartService.getCart();
                };
                CartComponent.prototype.ngOnInit = function () {
                    this.getCart();
                };
                CartComponent.prototype.calcTotalSum = function () {
                    var sum = 0;
                    this.currentCart.forEach(function (cartItem) {
                        sum = sum + cartItem.price;
                    });
                    return sum;
                };
                CartComponent = __decorate([
                    core_1.Component({
                        selector: 'cart',
                        templateUrl: './app/components/cart/cart.component.html',
                        styleUrls: ['./app/components/cart/cart.component.css']
                    }), 
                    __metadata('design:paramtypes', [cart_service_1.CartService])
                ], CartComponent);
                return CartComponent;
            }());
            exports_1("CartComponent", CartComponent);
        }
    }
});
//# sourceMappingURL=cart.component.js.map