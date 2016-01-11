import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map'; // add map function to observable

import {Pizza} from '../interfaces/pizza.interface';

@Injectable()
export class PizzaService {
    private pizzen:Pizza[];
    constructor(private _http: Http) {
    }

    getPizza() {
        return this._http.get('assets/pizza.json')
            .map(res => res.json());
    }
}
