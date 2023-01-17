import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Pizza } from '../models';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  public getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(`${environment.baseUrl}/pizzas`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }

  public getPizza(id: number): Observable<Pizza> {
    return this.http
      .get<Pizza>(`${environment.baseUrl}/pizzas/${id}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }

  public createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`${environment.baseUrl}/pizzas`, payload)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }

  public updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`${environment.baseUrl}/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }

  public removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`${environment.baseUrl}/pizzas/${payload.id}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }
}
