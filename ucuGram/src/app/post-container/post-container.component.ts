import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { PostService } from '../post-service.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getUser();
  
  }
  
  @Input() user?: User;
  @Input() post?: Post;

  getUser(): void{
    if (this.post){
      this.userService.getUser(this.post.user_id)
      .subscribe(user => this.user = user);
    }    
  }
  // getPost(): void {
  //   const postid = String(this.route.snapshot.paramMap.get('postid'));
  //   this.postService.getPostByID(this.id).subscribe(post => {this.post = post;
  //                                                           this.getUser();})
  // }
  showPost(post:Post): void{}
}