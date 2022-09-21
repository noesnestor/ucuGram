import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  @Input() user?: User;

 getUser(): void{
    const userid = String(this.route.snapshot.paramMap.get('userid'));
     this.userService.getUser(userid)
      .subscribe(user => this.user = user);
   } 
  

}
