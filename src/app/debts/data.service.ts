import {Injectable} from '@angular/core';
import {IDebt} from './debt';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  createDb() {
    const debts = [
      {
        debtId: 1,
        debtorName: 'Kamil',
        description: '',
        date: '07-07-2019',
        value: '5',
        meToPay: true
      },
      {
        debtId: 2,
        debtorName: 'Alan',
        description: 'beer',
        date: '02-07-2019',
        value: 10,
        meToPay: false
      }
    ];
    return {debts};
  }

  // private debtsUrl = 'https://api.myjson.com/bins/1b7u63';
  //
  // constructor(private http: HttpClient) {
  // }
  //
  // getDebts(): Observable<IDebt[]> {
  //   return this.http.get<IDebt[]>(this.debtsUrl).pipe(
  //     tap(data => console.log('All:' + JSON.stringify(data))),
  //     catchError(this.handleError));
  // }
  //
  // private handleError(err: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (err.error instanceof ErrorEvent) {
  //     errorMessage = `An error occurred:${err.error.message}`;
  //   } else {
  //     errorMessage = `Server returned code: ${err.status}, error message id: ${err.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // }
}
