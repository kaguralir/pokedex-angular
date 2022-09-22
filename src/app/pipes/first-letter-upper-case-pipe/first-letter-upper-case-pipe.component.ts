import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'src/app/services/models/pokemon_model';


@Pipe({
  name: 'firstLetterUpperCase'
})
export class FirstLetterUpperCasePipe implements PipeTransform {



  transform(word: string): string {

    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();


  }
}
