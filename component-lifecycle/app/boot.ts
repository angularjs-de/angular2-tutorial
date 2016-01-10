import {bootstrap} from 'angular2/platform/browser'
import {PizzaAppComponent} from './components/app.component';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(PizzaAppComponent, [HTTP_PROVIDERS]);
