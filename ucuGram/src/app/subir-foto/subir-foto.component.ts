import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subir-foto',
  templateUrl: './subir-foto.component.html',
  styleUrls: ['./subir-foto.component.css']
})
export class SubirFotoComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  title : string = "Subir foto";

  ngOnInit(): void {
  }

}
