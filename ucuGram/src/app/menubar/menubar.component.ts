import { Component, Input, OnInit, Output } from '@angular/core';

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
