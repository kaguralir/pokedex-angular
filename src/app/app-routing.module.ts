import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './post/details/details.component';
import { IndexComponent } from './post/index/index.component';
import { StatsComponent } from './post/stats/stats.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'pokemon/:pokemonId', // child route path
        component: DetailsComponent, // child route component that the router renders
      },
      {
        path: 'post/:pokemonId/stats',
        component: StatsComponent, // another child route component that the router renders
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
