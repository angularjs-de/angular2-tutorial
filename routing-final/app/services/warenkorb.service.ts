import {Injectable, EventEmitter, Output} from 'angular2/core';

interface WarenkorbEintrag {
    name: string,
    preis: number
}

@Injectable()
export class WarenkorbService {
    @Output() update: EventEmitter<boolean> = new EventEmitter();
    private warenkorb: WarenkorbEintrag[] = [];

    meinWarenkorb() {
        return this.warenkorb;
    }

    addWarenkorb(eintrag: WarenkorbEintrag) {
        this.warenkorb.push(eintrag);
        this.update.next(true);
    }
}
