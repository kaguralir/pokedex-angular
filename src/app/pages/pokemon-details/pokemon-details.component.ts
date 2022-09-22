import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../services/models/pokemon_model';
import { PostService } from '../../services/post.service'
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetail?: Pokemon;
  pokeName!: string;
  constructor(public postService: PostService,
    private route: ActivatedRoute,) { }


  ngOnInit(): void {
    console.log("'Work", this.route.snapshot.params['name'],);

    this.pokeName = this.route.snapshot.params['name'];

    this.postService.getOnePokemon(this.pokeName).subscribe((data: any) => {
      this.pokemonDetail = data;
      this.pokemonDetail?.name.charAt(0).toUpperCase();

      console.log("POkemon", this.pokemonDetail);
    })

  }

}
