import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { Pokemon } from '../services/models/pokemon_model';
import { PostService } from '../services/post.service';

@Injectable(
    {
        providedIn: "root"  // **** ADD THIS LINE ****
    }
)
export class PokemonDetailsResolver implements Resolve<Pokemon> {

    constructor(private postService: PostService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Pokemon> {
        const pokemonName = <string>route.paramMap.get('name');

        return this.postService.getOnePokemon(pokemonName)
    }

}