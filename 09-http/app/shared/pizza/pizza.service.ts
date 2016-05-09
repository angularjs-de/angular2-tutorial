import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // add map function to observable

@Injectable()
export class PizzaService {
    constructor(private _http: Http) {
    }

    getPizza() {
        return this._http.get('assets/pizza.json')
            .map((res: Response) => res.json());
    }
}
