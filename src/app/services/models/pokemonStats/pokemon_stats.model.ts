import { PokemonStatsName } from "./pokemon_statsName.model";

export interface PokemonStats {
  base_stat: string;
  effort: string;
  stat:PokemonStatsName;
}
