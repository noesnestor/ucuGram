import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post-service.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {
  }

  @Input() user_id?: string;
  
}
