import {Component} from 'angular2/core';

@Component({
    selector: 'pizza-app',
    template: `
    {{search.toUpperCase() + "!"}} oder {{1 + 2 + 3}}
    {{search.length === 3 ? "UI" : "PFUI"}}
    {{search.length || 0}}
    `
})
export class PizzaAppComponent {
    public search;
    constructor() {
        this.search = 'Test';
    }
}
