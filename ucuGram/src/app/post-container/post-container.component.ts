import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Post } from './Post';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getPost();
    this.getUser();
  }

  @Input() user?: User;
  @Input() post?: Post;

  getUser(): void{
    const userid = String(this.route.snapshot.paramMap.get('userid'));
    this.userService.getUser(userid)
      .subscribe(user => this.user = user);
  }
  getPost(): void {
    const postid = String(this.route.snapshot.paramMap.get('postid'));
  }
  showPost(post:Post): void{}
}