import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  { path: 'view/:name', component: PokemonDetailsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRoutingModule { }
