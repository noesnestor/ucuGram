import { Component, Input, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';

@Component({
  selector: 'profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  constructor(private userService : UserService) { }

  @Input() user? : User;

  ngOnInit(): void {
  }
}
