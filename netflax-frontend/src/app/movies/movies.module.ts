import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AllMoviesComponent } from './componentsMovies/all-movies/all-movies.component';


@NgModule({
  declarations: [
    AllMoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
