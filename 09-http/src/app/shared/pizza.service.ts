import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // add map function to observable

@Injectable()
export class PizzaService {

  constructor(
    private http: Http
  ) { }

  getPizza() {
    return this.http.get('pizza.json')
      .map((res: Response) => res.json());
  }
}
