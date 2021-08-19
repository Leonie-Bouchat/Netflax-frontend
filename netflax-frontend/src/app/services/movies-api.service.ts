import { ActorAll } from './../models/actor-all';
import { Actor } from './../models/actor';
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

  public getAllMoviesByDate(): Observable<Movie[]>{
    return this._localAPI.get<Movie[]>(this._localURL+'/movies/date');
  }

  public getAllTypes(): Observable<Type[]>{
    return this._localAPI.get<Type[]>(this._localURL+'/movies/types/all')
  }

  public getAllMoviesByTypeId(id: number): Observable<Movie[]>{
    return this._localAPI.get<Movie[]>(this._localURL+'/movies/types/'+id+'/movies')

  }

  public getAllTypesByMovieId(id: number) : Observable<Type[]>{
    return this._localAPI.get<Type[]>(this._localURL+'/movies/'+id+'/types')
  }

  public getAllActorsByMovieId(id: number) : Observable<Actor[]>{
    return this._localAPI.get<Actor[]>(this._localURL+'/movies/'+id+'/actors')
  }

  public getAllActors() : Observable<Actor[]>{
    return this._localAPI.get<Actor[]>(this._localURL+'/actors/all')
  }

  public getOneActor(id: number) : Observable<ActorAll>{
    return this._localAPI.get<ActorAll>(this._localURL+'/actors/'+id)
  }

  public getAllMoviesByActorId(id: number) : Observable<Movie[]>{
    return this._localAPI.get<Movie[]>(this._localURL+'/actors/'+id+'/movies')
  }

  public getOneType(id: number) : Observable<Type>{
    return this._localAPI.get<Type>(this._localURL+'/movies/types/'+id)
  }
}
