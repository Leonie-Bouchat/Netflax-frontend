import { MoviesHomeComponent } from './componentsMovies/movies-home/movies-home.component';
import { TypesComponent } from './componentsMovies/types/types.component';
import { ReleaseDateComponent } from './componentsMovies/release-date/release-date.component';
import { MovieComponent } from './componentsMovies/movie/movie.component';
import { AllMoviesComponent } from './componentsMovies/all-movies/all-movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesHomeComponent},
  {path: 'movies/all', component: AllMoviesComponent},
  {path: 'movies/:id', component: MovieComponent},
  {path: 'movies/release-date', component: ReleaseDateComponent},
  {path: 'movies/types', component: TypesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
