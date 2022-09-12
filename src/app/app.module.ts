import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './post/index/index.component';
import { DetailsComponent } from './post/details/details.component';
import { StatsComponent } from './post/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
