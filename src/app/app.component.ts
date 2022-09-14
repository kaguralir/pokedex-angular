import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { Pokemon } from './services/models/pokemon_model';
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
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService, private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
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


  }


}