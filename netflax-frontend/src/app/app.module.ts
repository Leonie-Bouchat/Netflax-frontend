import { AllMoviesComponent } from './movies/componentsMovies/all-movies/all-movies.component';
import { ActorsModule } from './actors/actors.module';
import { MoviesModule } from './movies/movies.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentsIndex/nav/nav.component';
import { FooterComponent } from './componentsIndex/footer/footer.component';
import { HomeComponent } from './componentsIndex/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesHomeComponent } from './movies/componentsMovies/movies-home/movies-home.component';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
// import { MoviesComponent } from './movies/componentsMovies/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    ActorsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
