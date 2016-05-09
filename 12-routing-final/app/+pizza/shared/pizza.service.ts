import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // add map function to observable

import {Pizza} from './pizza.model';

@Injectable()
export class PizzaService {
    constructor(private http: Http) {
    }

    getPizza(): Observable<Pizza[]> {
        return this.http
            .get('assets/pizza.json')
            .map((res: Response) => res.json());
    }
}
