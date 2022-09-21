import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import { PostService} from '../post-service.service';
import { Post } from '../post';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
  ) { }

  search(event: any) {
    /* this.postService.getPosts().subscribe(posts => this.posts = posts);
    if(this.posts!=undefined){
      this.filteredPosts = new Array<Post>();
      this.posts.forEach(post => {
        if (post.alt.includes(event.target.value)) {
          this.filteredPosts?.push(post);
        }
      });
    } */
  }
}
