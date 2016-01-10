System.register(['angular2/platform/browser', './components/app.component', 'angular2/http', './services/warenkorb.service'], function(exports_1) {
    var browser_1, app_component_1, http_1, warenkorb_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (warenkorb_service_1_1) {
                warenkorb_service_1 = warenkorb_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.PizzaAppComponent, [http_1.HTTP_PROVIDERS, warenkorb_service_1.WarenkorbService]);
        }
    }
});
//# sourceMappingURL=boot.js.map