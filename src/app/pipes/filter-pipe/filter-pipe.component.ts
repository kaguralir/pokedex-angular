import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'src/app/services/models/pokemon_model';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  filterBy!: string;

  transform(pokemons: Pokemon[] = [], filterBy: string): any[] {
    if (!pokemons) return [];
    if (!filterBy) return pokemons
    console.log("Filter input", filterBy, pokemons,);

    return pokemons.filter(pokemon => pokemon.name.includes(filterBy));

  }
}
