import { Movie } from './../../../models/movie';
import { MoviesAPIService } from './../../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  public allMovies: Movie[] = [];
  public movie: any;

  constructor(private _api: MoviesAPIService) { }

  ngOnInit(): void {
    this._api.getAllMoviesByType().subscribe(res => this.allMovies = res)
  }

}
