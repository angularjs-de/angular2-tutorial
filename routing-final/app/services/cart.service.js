System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CartService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CartService = (function () {
                function CartService() {
                    this.update = new core_1.EventEmitter();
                    this.cart = [];
                }
                CartService.prototype.getCart = function () {
                    return this.cart;
                };
                CartService.prototype.addCartItem = function (item) {
                    this.cart.push(item);
                    this.update.next(true);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CartService.prototype, "update", void 0);
                CartService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CartService);
                return CartService;
            })();
            exports_1("CartService", CartService);
        }
    }
});
//# sourceMappingURL=cart.service.js.map