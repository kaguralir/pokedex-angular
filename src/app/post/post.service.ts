import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pokemon } from './pokemon_model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://pokeapi.co/api/v2/pokemon/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.apiURL + '?offset=0&limit=600')
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