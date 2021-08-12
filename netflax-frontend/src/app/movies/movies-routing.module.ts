import { AllMoviesComponent } from './componentsMovies/all-movies/all-movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'all-movies', pathMatch: 'full'},
  {path: 'all-movies', component: AllMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
