import { Component } from '@angular/core';
import { PostService } from '../app/post/post.service';
import { Pokemon } from '../app/post/pokemon_model';
import { OnInit } from '@angular/core';
import {
  Router, NavigationStart, NavigationEnd, Event, NavigationCancel,
  NavigationError
} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public showLoadingIndicator: boolean = true;

  pokemons: Pokemon[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService, private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        console.log("YOU ARE HERE");
        this.showLoadingIndicator = true;
      }

      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.showLoadingIndicator = false;
      }
    });

  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: any) => {
      this.pokemons = data.results;
      console.log(this.pokemons);
    })

  }


}