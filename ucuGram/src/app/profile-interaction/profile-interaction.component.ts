import { Component, OnInit, Input} from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';

@Component({
  selector: 'profile-interaction',
  templateUrl: './profile-interaction.component.html',
  styleUrls: ['./profile-interaction.component.css']
})
export class ProfileInteractionComponent implements OnInit {

  constructor(private userService : UserService) { }

  @Input() user? : User;

  ngOnInit(): void {
  }
}
