import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesAPIService {

  private _localURL: string = 'http://localhost:3000';

  constructor(private _localAPI: HttpClient) { }

  public getAllMovies() : Observable<Movie[]>{
    return this._localAPI.get<any[]>(this._localURL+'/movies')
  }

  public getOneMovie(id:number) : Observable<any>{
    return this._localAPI.get<any>(this._localURL+'/movies/'+id);
  } 
}
