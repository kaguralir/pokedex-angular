import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Pokemon } from '../../services/models/pokemon_model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(public postService: PostService,) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: any) => {
      this.pokemons = data.results;
      console.log(data);
    })


  }
}
