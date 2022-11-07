import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  private profileUrl = 'http://localhost:3000/api/v1/profiles'

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  getPostsFromUser(userid : string, startAt : number){
    const url = `${this.profileUrl}/${userid}/${startAt}`;
    return this.http.get<Post[]>(url)
  }
}
