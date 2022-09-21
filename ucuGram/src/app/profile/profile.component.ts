import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './../user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private route : ActivatedRoute, private userService : UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  @Input() user? : User;

  getUser()
  {
    const user = String(this.route.snapshot.paramMap.get('userid'));
    this.userService.getUser(user).subscribe(user => this.user = user);
  }
}
