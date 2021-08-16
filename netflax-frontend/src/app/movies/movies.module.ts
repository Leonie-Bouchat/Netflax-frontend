import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AllMoviesComponent } from './componentsMovies/all-movies/all-movies.component';
import { TypesComponent } from './componentsMovies/types/types.component';
import { ReleaseDateComponent } from './componentsMovies/release-date/release-date.component';
import { MovieComponent } from './componentsMovies/movie/movie.component';
import { MoviesHomeComponent } from './componentsMovies/movies-home/movies-home.component';


@NgModule({
  declarations: [
    AllMoviesComponent,
    TypesComponent,
    ReleaseDateComponent,
    MovieComponent,
    MoviesHomeComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
