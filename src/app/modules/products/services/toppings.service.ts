import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<string[]> {
    return this.http
      .get<string[]>(`${environment.baseUrl}/toppings`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }
}
