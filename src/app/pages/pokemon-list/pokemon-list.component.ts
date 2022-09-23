import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Pokemon } from '../../services/models/pokemon_model';
import { PostService } from '../../services/post.service';
import { FilterPipe } from 'src/app/pipes/filter-pipe/filter-pipe.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  listOfPokemons: Pokemon[] = [];

  length: number = 10;
  pageSize: number = 10;

  pageEvent?: PageEvent;
  pageSizeOptions: number[] = [20, 30, 100, 200];

  searchText!: string;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(public postService: PostService,) { }

  loadPage(event: PageEvent) {
    this.pageEvent = event;
    this.postService.getAllbyOffset(this.pageEvent.pageIndex * this.pageEvent.pageSize, this.pageEvent.pageSize).subscribe((data: any) => {
      this.listOfPokemons = data.results;
      this.length = data.count;
    })
  }

  ngOnInit(): void {
    this.loadPokemonPage();
  }

  loadPokemonPage() {
    this.listOfPokemons = []

    this.postService.getAllbyOffset(0, this.pageSize).subscribe((data: any) => {
      this.listOfPokemons = data.results;
      this.length = data.count;
    })
  }

}
