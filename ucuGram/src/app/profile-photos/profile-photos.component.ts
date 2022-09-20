import { Component, OnInit, Input} from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post-service.service';
import { User } from '../user';

@Component({
  selector: 'profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.css']
})
export class ProfilePhotosComponent implements OnInit {

  constructor(private postService : PostService) { }

  @Input() posts? : Post[];
  @Input() user? : User;

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() : void{
    if(this.user)
    {
      this.postService.getPostsByUserid(this.user?.id).subscribe(posts => this.posts = posts);
    }
  }
}
