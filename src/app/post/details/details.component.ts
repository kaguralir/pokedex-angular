import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Pokemon } from '../pokemon_model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-root',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  template: `
  <div
  class="search-results"
      infiniteScroll
      [infiniteScrollDistance]="2"
      [infiniteScrollThrottle]="50"
      [scrollWindow]="false"
      (scrolled)="onScrollDown()"
      (scrolledUp)="onScrollUp()"
  ></div>
`,
})

export class DetailsComponent implements OnInit {
  onScroll() {
    console.log("scrolled!!");
  }
  onScrollDown() {
    console.log('scrolled down!!');
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }
  pokemons: Pokemon[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: any) => {
      this.pokemons = data.results;
      console.log(this.pokemons);
    })

  }


}