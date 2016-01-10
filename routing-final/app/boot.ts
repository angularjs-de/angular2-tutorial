import {bootstrap} from 'angular2/platform/browser'
import {PizzaAppComponent} from './components/app.component';
import {HTTP_PROVIDERS} from 'angular2/http';

import {WarenkorbService} from './services/warenkorb.service';

bootstrap(PizzaAppComponent, [HTTP_PROVIDERS, WarenkorbService]);
