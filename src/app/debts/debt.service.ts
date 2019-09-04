import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {throwError, Observable} from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';
import {IDebt} from './debt';


@Injectable({
  providedIn: 'root'
})
export class DebtService {
  apiurl = 'api/debts';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getDebts(): Observable<IDebt[]> {
    return this.http.get<IDebt[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
}
