import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Pokemon } from '../pokemon_model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-root',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

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