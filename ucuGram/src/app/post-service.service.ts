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

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  private postsUrl = 'api/posts';  // URL to web api

  public getPosts(): Observable<Post[]>
  {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPostsByUserid(user_id: string): Observable<Post[]> {
    let filteredPosts = new Array<Post>();
    this.http.get<Post[]>(this.postsUrl).subscribe(posts => {
      posts.forEach(post => {
        if (post.user_id.includes(user_id)) {
          filteredPosts.push(post);
        }
      });
    });
    return of(filteredPosts);
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
  getPostsByAlt(event: string): Observable<Post[]> {
    let filteredPosts = new Array<Post>();
    this.http.get<Post[]>(this.postsUrl).subscribe(posts => {
      posts.forEach(post => {
        if (post.alt.includes(event)) {
          filteredPosts.push(post);
        }
      });
    });
    return of(filteredPosts);
  }
}


