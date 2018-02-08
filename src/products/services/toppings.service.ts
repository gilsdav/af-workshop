import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { of } from 'rxjs/observable/of';

import { environment } from '../../environments/environment';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<string[]> {
    // TODO: get list og toppings
    return of([]);
  }
}
