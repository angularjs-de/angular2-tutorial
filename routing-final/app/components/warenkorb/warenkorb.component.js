System.register(['angular2/core', '../../services/warenkorb.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, warenkorb_service_1;
    var WarenkorbComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (warenkorb_service_1_1) {
                warenkorb_service_1 = warenkorb_service_1_1;
            }],
        execute: function() {
            WarenkorbComponent = (function () {
                function WarenkorbComponent(_warenkorbService) {
                    this._warenkorbService = _warenkorbService;
                }
                WarenkorbComponent.prototype.holeWarenkorb = function () {
                    this.aktuellerWarenkorb = this._warenkorbService.meinWarenkorb();
                };
                WarenkorbComponent.prototype.ngOnInit = function () {
                    this.holeWarenkorb();
                };
                WarenkorbComponent.prototype.gesamtSumme = function () {
                    var summe = 0;
                    this.aktuellerWarenkorb.forEach(function (warenkorbEintrag) {
                        summe = summe + warenkorbEintrag.preis;
                    });
                    return summe;
                };
                WarenkorbComponent = __decorate([
                    core_1.Component({
                        selector: 'warenkorb',
                        templateUrl: './app/components/warenkorb/warenkorb.component.html',
                        styleUrls: ['./app/components/warenkorb/warenkorb.component.css']
                    }), 
                    __metadata('design:paramtypes', [warenkorb_service_1.WarenkorbService])
                ], WarenkorbComponent);
                return WarenkorbComponent;
            })();
            exports_1("WarenkorbComponent", WarenkorbComponent);
        }
    }
});
//# sourceMappingURL=warenkorb.component.js.map