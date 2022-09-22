import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'src/app/services/models/pokemon_model';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(pokemon: Pokemon[], searchText: string): any[] {
    if (!pokemon) return [];
    if (!searchText) return pokemon;

    searchText = searchText.toLowerCase();
    return pokemon.filter(it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
