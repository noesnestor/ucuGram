import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post-service.service';
import { Post } from '../post';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private postService : PostService) { }

    public posts? : Post[];

  ngOnInit(): void {
    this.getPosts()
  }


  getPosts(): void{
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

}
