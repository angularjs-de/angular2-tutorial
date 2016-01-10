import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {WarenkorbService} from '../../services/warenkorb.service';

@Component({
    selector: 'navigation',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <p class="well">
      <a [routerLink]="['Bestellung']">Start</a> | <a [routerLink]="['Ueber']">Über</a>
      <a class="pull-right" *ngIf="neuerWarenkorb">Warekorb aktualisiert!</a>
    </p>
    `
})
export class NavigationComponent {
    public neuerWarenkorb: boolean;
    constructor(private _warenkorbService: WarenkorbService) {
        this.neuerWarenkorb = false;
    }

    ngOnInit() {
        this._warenkorbService.update.subscribe(update => {
            if (update) {
                var self = this;
                this.neuerWarenkorb = true;
                setTimeout(function () {
                    self.neuerWarenkorb = false;
                }, 500)
            }
        });
    }
}
