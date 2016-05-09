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
var PizzaAppComponent = (function () {
    function PizzaAppComponent() {
        this.search = 'Test';
    }
    PizzaAppComponent = __decorate([
        core_1.Component({
            selector: 'pizza-app',
            template: "\n    {{search.toUpperCase() + \"!\"}} oder {{1 + 2 + 3}}\n    {{search.length === 3 ? \"UI\" : \"PFUI\"}}\n    {{search.length || 0}}\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PizzaAppComponent);
    return PizzaAppComponent;
}());
exports.PizzaAppComponent = PizzaAppComponent;
//# sourceMappingURL=app.component.js.map