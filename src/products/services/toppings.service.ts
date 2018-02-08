import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<string[]> {
    return this.http
      .get<string[]>(`${BASE_URL}/toppings`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
