import { MovieAll } from './../models/movie-all';
import { Type } from './../models/type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesAPIService {

  private _localURL: string = 'http://localhost:3000';
  public selectedMovie : any;

  constructor(private _localAPI: HttpClient) { }

  public getAllMovies() : Observable<Movie[]>{
    return this._localAPI.get<Movie[]>(this._localURL+'/movies/all');
  }

  public getOneMovie(id:number) : Observable<MovieAll>{
    return this._localAPI.get<MovieAll>(this._localURL+'/movies/'+id);
  } 

  public getAllMoviesByType(): Observable<Movie[]>{
    return this._localAPI.get<Movie[]>(this._localURL+'/movies/date')
  }

  public async getOneFullMovie(id:number) : Promise<Movie>{
    let movie: Movie = {IdMovie:0, Title: "not found"};
    await this._localAPI.get<Movie>(this._localURL+'/movies/'+id).subscribe(data => {
      movie = data;
      // this._localAPI.get<any>(this._localURL+'/movies/genre/'+id).subscribe(genres => {
      //   movie.Type = genres;
      // })
      // this._localAPI.get<any>(this._localURL+'/actors/'+id).subscribe(actors => {
      //   movie.Actor = actors;
      // })
    });
    return movie;
  } 

  // public getOneMovie(id:number) : Observable<Movie[]>{
  //   return this._localAPI.get<Movie[]>(this._localURL+'/movies/'+id);
  // } 
}
