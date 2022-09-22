import { Component, HostBinding, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @HostBinding("style.visibility") visibility = "hidden"

  open(e: Event) {
    this.visibility = "visible"
  }

  close() {
    this.visibility = "hidden"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
