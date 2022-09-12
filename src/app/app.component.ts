import { Component } from '@angular/core';
import { PostService } from '../app/post/post.service';
import { Pokemon } from '../app/post/pokemon_model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
       
  pokemons: Pokemon[] = [];
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.postService.getAll().subscribe((data:any)=>{
      this.pokemons = data.results;
      console.log(this.pokemons);      
    })  
    
  }

     
}