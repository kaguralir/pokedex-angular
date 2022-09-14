import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon_model';
import { PostService } from '../post.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  pokemonDetail!: Pokemon;
  pokéName!: string;
  constructor(public postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    console.log("'OKIOKI", this.route.snapshot.params['name'],);

    this.pokéName = this.route.snapshot.params['name'];

    this.postService.getOnePokemon(this.pokéName).subscribe((data: any) => {
      this.pokemonDetail = data;
      this.pokemonDetail.name.charAt(0).toUpperCase();

      console.log(this.pokemonDetail);
    })

  }

}
