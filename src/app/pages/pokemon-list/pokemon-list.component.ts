import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { ListOfPokemons } from 'src/app/services/models/list_of_pokemons.model';
import { Pokemon } from '../../services/models/pokemon_model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  listOfPokemons: Pokemon[] = [];

  offSet: number = 0;
  limit: number = 10;
  length?: number;
  pageSize: number = 10;
  pageSizeOptions: number[] = [0, 50, 150, 200, 250];
  pageEvent?: PageEvent;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(public postService: PostService,) { }

  ngOnInit(): void {
    this.loadPokemonPage();
    console.log("ngInit - listLength", this.listOfPokemons.length)

  }

  ngAfterViewInit() {
    console.log("AfterViewInitStart - listLength", this.listOfPokemons.length)

    console.log('nextpage', this.offSet)
    this.paginator?.page
      .pipe(
        tap(() => this.loadPokemonPage())
      )
      .subscribe(() => {

      });
    console.log("AfterViewInitEnd - listLength", this.listOfPokemons.length)

  }

  loadPokemonPage() {
    console.log("loadPkmnPageStart - listLength", this.listOfPokemons.length)
    this.listOfPokemons = []
    this.postService.getAllbyOffset(this.offSet, this.paginator?.pageSize).subscribe((data: any) => {
      this.listOfPokemons = data.results;
      this.limit = data.count;
      this.offSet += 10;
    })

    console.log(this.listOfPokemons);
    console.log("loadPkmnPageEnd - listLength", this.listOfPokemons.length)
  }
}
