import { Component, Input, OnInit, PipeTransform } from '@angular/core';
import { AbilityList } from 'src/app/services/models/pokemonDetails/abilityList_model';
import { Ability } from 'src/app/services/models/pokemonDetails/ability_model';
import { Pokemon } from 'src/app/services/models/pokemon_model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],

})


export class PokemonCardComponent implements OnInit {
  @Input() pokemon?: Pokemon;


  action: string = 'Add';
  cardPage = 1;
  cardButtons =
    [
      { id: 1, iconName: 'image' },
      { id: 2, iconName: 'query_stats' },
      { id: 3, iconName: 'info_outline' }
    ];

  changeCardPage(number: number) {
    console.log("clicked", number);
    this.cardPage = number;
  }
  constructor() {

  }

  ngOnInit(): void {
  }

}
