import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-sup',
  templateUrl: './nav-bar-sup.component.html',
  styleUrls: ['./nav-bar-sup.component.css']
})
export class NavBarSupComponent implements OnInit {

  constructor() { }

  @Input() navtext?: string;
  
  ngOnInit(): void {

  }

}
