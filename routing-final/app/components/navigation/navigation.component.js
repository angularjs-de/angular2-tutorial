System.register(['angular2/core', 'angular2/router', '../../services/warenkorb.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, warenkorb_service_1;
    var NavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (warenkorb_service_1_1) {
                warenkorb_service_1 = warenkorb_service_1_1;
            }],
        execute: function() {
            NavigationComponent = (function () {
                function NavigationComponent(_warenkorbService) {
                    this._warenkorbService = _warenkorbService;
                    this.neuerWarenkorb = false;
                }
                NavigationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._warenkorbService.update.subscribe(function (update) {
                        if (update) {
                            var self = _this;
                            _this.neuerWarenkorb = true;
                            setTimeout(function () {
                                self.neuerWarenkorb = false;
                            }, 500);
                        }
                    });
                };
                NavigationComponent = __decorate([
                    core_1.Component({
                        selector: 'navigation',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <p class=\"well\">\n      <a [routerLink]=\"['Bestellung']\">Start</a> | <a [routerLink]=\"['Ueber']\">\u00DCber</a>\n      <a class=\"pull-right\" *ngIf=\"neuerWarenkorb\">Warekorb aktualisiert!</a>\n    </p>\n    "
                    }), 
                    __metadata('design:paramtypes', [warenkorb_service_1.WarenkorbService])
                ], NavigationComponent);
                return NavigationComponent;
            })();
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});
//# sourceMappingURL=navigation.component.js.map