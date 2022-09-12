import { Ability } from "./ability_model";

export interface Pokemon {
    id: number;
    results: [];
    abilities: Ability[];
    name: string;
    url:string;
    }