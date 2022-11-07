import { Injectable } from '@angular/core';

import { User } from './user';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient
  ) { }

  private usersUrl = 'http://localhost:3000/api/v1/users';  // URL to web api

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


  //TODO: Change error handling and 'console.log's to better solutions of error handling.

  getUser(userid: string): Observable<User> {
    const url = `${this.usersUrl}/${userid}`;
    return this.http.get<User>(url,this.httpOptions);
  }

}
