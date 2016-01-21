import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {FooterComponent} from './footer/footer.component';

@RouteConfig([{
    path: '/footer',
    component: FooterComponent,
    name: 'Footer'
}])

@Component({
    selector: 'about',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div>Wir sind Ihr Lieferdienst, wenn es um PIZZA* geht! Dafür stehen wir mit unserem Namen.</div>
    <router-outlet></router-outlet>
    `
})
export class AboutComponent {}
