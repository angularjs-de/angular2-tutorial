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
    var PizzaSuchePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PizzaSuchePipe = (function () {
                function PizzaSuchePipe() {
                }
                PizzaSuchePipe.prototype.transform = function (pizzen, args) {
                    var suchString = args[0], treffer = [];
                    if (!suchString) {
                        return pizzen;
                    }
                    pizzen.forEach(function (pizza) {
                        if (pizza.name.match(new RegExp(suchString, 'i'))) {
                            treffer.push(pizza);
                        }
                    });
                    return treffer;
                };
                PizzaSuchePipe = __decorate([
                    core_1.Pipe({ name: 'pizzaSuche' }), 
                    __metadata('design:paramtypes', [])
                ], PizzaSuchePipe);
                return PizzaSuchePipe;
            })();
            exports_1("PizzaSuchePipe", PizzaSuchePipe);
        }
    }
});
//# sourceMappingURL=pizzaSuche.pipe.js.map