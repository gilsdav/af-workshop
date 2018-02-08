import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';
import { Pizza } from '../models/pizza.model';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  public getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(`${environment.baseUrl}/pizzas`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  public createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`${environment.baseUrl}/pizzas`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  public updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`${environment.baseUrl}/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  public removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`${environment.baseUrl}/pizzas/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
