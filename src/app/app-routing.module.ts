import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsWithResolverComponent } from './pages/pokemon-details-with-resolver/pokemon-details-with-resolver.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonDetailsResolver } from './resolvers/pokemonDetails.resolvers';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  { path: 'view/:name', component: PokemonDetailsComponent },
  { path: 'view-resolver/:name', component: PokemonDetailsWithResolverComponent, resolve: { pokemon: PokemonDetailsResolver } },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
