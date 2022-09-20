import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../../post-service.service';
import { Post } from '../../post';

import {SearchService} from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    
    private searchService : SearchService
  ) { }

  @Input() post?: Post;
  public posts? : Post[];
  public filteredPosts? : Post[];

  ngOnInit(): void {
  }

  
}

