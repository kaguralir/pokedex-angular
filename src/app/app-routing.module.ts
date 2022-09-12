import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './post/details/details.component';
import { IndexComponent } from './post/index/index.component';
import { StatsComponent } from './post/stats/stats.component';

const routes: Routes = [
  { path: '', component: DetailsComponent },
  { path: 'view/:name', component: IndexComponent },
  { path: 'post/:pokemonId/stats', component: StatsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
