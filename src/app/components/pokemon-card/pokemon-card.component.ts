import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/services/models/pokemon_model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],

})


export class PokemonCardComponent implements OnInit {
  @Input() pokemon?: Pokemon;
  action: string = 'Add';
cardPage=1;
  cardButtons =
  [
    { id: 0, iconName: 'image', click: () => this.cardPage=1},
    { id: 1, iconName: 'query_stats', click: () => this.cardPage=2},
    { id: 2, iconName: 'info_outline',click: () => this.cardPage=3}
  ];


  constructor() { }

  showStats(){}
  showImage(){}
  showDetails(){}
  clickMessage(){}
  onClick() {
    if(this.action == 'Add') {
      this.action = 'Delete';
      alert('Primary Clicked');
    } else {
      this.action = 'Add';
        alert('Danger clicked');
    }
  }


  ngOnInit(): void {
  }

}
