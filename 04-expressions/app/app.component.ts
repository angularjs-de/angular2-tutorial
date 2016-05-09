import {Component} from '@angular/core';

@Component({
    selector: 'pizza-app',
    template: `
    {{search.toUpperCase() + "!"}} oder {{1 + 2 + 3}}
    {{search.length === 3 ? "UI" : "PFUI"}}
    {{search.length || 0}}
    `
})
export class PizzaAppComponent {
    public search: String;
    constructor() {
        this.search = 'Test';
    }
}
