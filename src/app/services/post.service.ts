import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pokemon } from './models/pokemon_model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://pokeapi.co/api/v2/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.apiURL + 'pokemon/?offset=0&limit=1118')
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getPokemonDetails(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.apiURL + 'pokemon-species?limit=1118')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getOnePokemon(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.apiURL}pokemon/${name}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.apiURL + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }



  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}