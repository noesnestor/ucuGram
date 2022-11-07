import { Component, OnInit } from '@angular/core';
import { PostService} from '../../post-service.service';
import { Post } from '../../post';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {

  filteredPosts?: Post[];
  constructor(
    private postService : PostService,
  ) { }

  private postsSent = 0;
  private searchSet = "";

  ngOnInit(): void {
  }

  search(event: any) {
    if(this.filteredPosts)
    {
      this.filteredPosts = []
    }
    this.postsSent = 0;
    this.postService.getPostsByAlt(event.target.value,this.postsSent).subscribe(posts => {
      if(posts.length!=0){
      this.postsSent+=4,
      this.searchSet = posts[0].alt,
      this.filteredPosts = posts
      }
    });
  }

  searchMore() {
    this.postService.getPostsByAlt(this.searchSet,this.postsSent).subscribe(posts => {
      if(posts.length!=0){
      this.postsSent+=4,
      this.searchSet = posts[0].alt,
      this.filteredPosts?.push(...posts)
      }
      
    });
  }

  addMorePhotos(){
    this.searchMore();
  }

}
