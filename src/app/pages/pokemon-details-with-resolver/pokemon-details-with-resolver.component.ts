import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/services/models/pokemon_model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-pokemon-details-with-resolver',
  templateUrl: './pokemon-details-with-resolver.component.html',
  styleUrls: ['./pokemon-details-with-resolver.component.css']
})
export class PokemonDetailsWithResolverComponent implements OnInit {
  pokemonDetail?: Pokemon;
  constructor(private route: ActivatedRoute,) { }


  ngOnInit(): void {

    this.route.data.subscribe((data) => { this.pokemonDetail = data['pokemon'] })

  }
}
