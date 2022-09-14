import { Ability } from "./ability_model";
import { PokemonSpecie } from "./pokemon_specie_model";
import { PokemonSprite } from "./pokemon_sprites_model";

export interface Pokemon {
    abilities: Ability[];
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
    stats: [];
    types: [];
    weight: number;
}