import {Injectable} from '@angular/core';
import {IDebt} from './debt';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  private debtsUrl = 'https://api.myjson.com/bins/1b7u63';

  constructor(private http: HttpClient) {
  }

  getDebts(): Observable<IDebt[]> {
    return this.http.get<IDebt[]>(this.debtsUrl).pipe(
      tap(data => console.log('All:' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred:${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message id: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
