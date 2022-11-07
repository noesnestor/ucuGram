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
    this.postService.getPostsCarousel().subscribe(posts => this.posts = posts);
  }

  showPost(post:Post): void{
    var modal = document.getElementById("modal-photo");
    if (modal){
      var img = document.getElementsByClassName("modal-content")[0];
      img.setAttribute("src", post.src);
      modal.style.display="block";
    }
  }
  closeModal(): void {
    var modal2 = document.getElementById("modal-photo");
    if (modal2){
      var img = document.getElementsByClassName("modal-content")[0];
      img.setAttribute("src", "");
      modal2.style.display="none";
    }
  }

}
