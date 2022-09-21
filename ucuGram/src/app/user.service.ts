import { Injectable } from '@angular/core';

import { User } from './user';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient
  ) { }

  private usersUrl = 'api/users';  // URL to web api

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


  //TODO: Change error handling and 'console.log's to better solutions of error handling.

  getUser(userid: string): Observable<User> {
    const url = `${this.usersUrl}/${userid}`;
    return this.http.get<User>(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
