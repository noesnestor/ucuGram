import { Component, OnInit, Input} from '@angular/core';
import { Post } from '../post';
import { ProfileService } from '../profile.service';
import { User } from '../user';

@Component({
  selector: 'profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.css']
})
export class ProfilePhotosComponent implements OnInit {

  constructor(private  profileService : ProfileService) { }

  @Input() posts? : Post[];
  @Input() user? : User;

  private postsSent = 0; 

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() : void{
    if(this.user)
    {
      this.profileService.getPostsFromUser(this.user?._id,this.postsSent).subscribe(posts =>{
        if(posts.length!=0){
          this.posts = posts,
          this.postsSent+=4
        }
      } );
    }
  }

  getMorePosts() {
    if(this.user){
        this.profileService.getPostsFromUser(this.user?._id,this.postsSent).subscribe(posts =>{
          if(posts.length!=0){
            this.postsSent+=4,
            this.posts?.push(...posts)
          }
        });
      }
    }

  addMorePosts(){
    this.getMorePosts();
  }
}
