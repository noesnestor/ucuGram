import { Component, OnInit } from '@angular/core';
import { PostService} from '../../post-service.service';
import { Post } from '../../post';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {

  filteredPosts? : Post[];
  constructor(
    private postService : PostService,
  ) { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.postService.getPostsByAlt(event.target.value).subscribe(posts => this.filteredPosts = posts);
  }

}
