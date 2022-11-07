import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  httpOptionsJSON = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  httpOptionsFile = { headers : new HttpHeaders({'Content-Type': 'multipart/form-data'})}

  private postsUrl = 'http://localhost:3000/api/v1/posts';  // URL to web api

  public getPostsCarousel(): Observable<Post[]>
  {
    const url = this.postsUrl+"/carousel";
    return this.http.get<Post[]>(url);
  }

  public getPostByID(id: number) : Observable<Post>
  {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url).pipe(catchError(this.handleError<Post>(`getPost id=${id}`)));
  }
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  getPostsByAlt(event: string, startAt : number): Observable<Post[]> {
    const url = `${this.postsUrl}/search/${event}/${startAt}`;
    return this.http.get<Post[]>(url);
  }

  addPost(formData : FormData) {
    return this.http.post<any>(this.postsUrl, formData, this.httpOptionsFile);
  }
}


