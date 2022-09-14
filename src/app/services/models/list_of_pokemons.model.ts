import { ResultsOfListOfPokemons } from "./results_of_list_of_pokemons.model";

export interface ListOfPokemons {
    count: number;
    url: string;
    previous: null;
    results: ResultsOfListOfPokemons[];
}