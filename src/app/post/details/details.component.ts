import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon_model';
import { PostService } from '../post.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: number;
  post!: Pokemon;


  constructor(public postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log("THIS IS ", this.id);

    this.id = this.route.snapshot.params['pokemonId'];
    this.postService.find(this.id).subscribe((data: Pokemon) => {
      this.post = data;
    });

  }

}
