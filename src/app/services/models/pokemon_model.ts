import { AbilityList } from "./pokemonDetails/abilityList_model";
import { PokemonStats } from "./pokemonStats/pokemon_stats.model";
import { PokemonSpecie } from "./pokemon_specie_model";
import { PokemonSprite } from "./pokemon_sprites_model";

export interface Pokemon {
  abilities: AbilityList[];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encouters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: PokemonSpecie;
  sprites: PokemonSprite;
  stats: PokemonStats[];
  types: [];
  weight: number;
}
