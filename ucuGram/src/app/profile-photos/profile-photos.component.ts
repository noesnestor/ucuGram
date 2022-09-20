import { Component, OnInit, Input} from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post-service.service';

@Component({
  selector: 'profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.css']
})
export class ProfilePhotosComponent implements OnInit {

  constructor(private postService : PostService) { }

  @Input() posts? : Post[];

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() : void{
    const user = "kroosfriend15";
    this.postService.getPostsByUserid(user).subscribe(posts => this.posts = posts);
  }
}
