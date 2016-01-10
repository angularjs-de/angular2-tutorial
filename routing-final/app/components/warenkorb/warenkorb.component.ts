import {Component, OnInit} from 'angular2/core';

import {WarenkorbService} from '../../services/warenkorb.service';

@Component({
    selector: 'warenkorb',
    templateUrl: './app/components/warenkorb/warenkorb.component.html',
    styleUrls: ['./app/components/warenkorb/warenkorb.component.css']
})
export class WarenkorbComponent {
    public aktuellerWarenkorb;

    constructor(private _warenkorbService: WarenkorbService) {
    }

    holeWarenkorb() {
        this.aktuellerWarenkorb = this._warenkorbService.meinWarenkorb();
    }

    ngOnInit() {
        this.holeWarenkorb();
    }

    gesamtSumme() {
        var summe = 0;

        this.aktuellerWarenkorb.forEach(function (warenkorbEintrag) {
            summe = summe + warenkorbEintrag.preis;
        });

        return summe;
    }
}
