import { Movie } from './../../../models/movie';
import { MoviesAPIService } from './../../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  public allMovies: any[] = [];
  public movie: any;

  constructor(private _api: MoviesAPIService) { }

  ngOnInit(): void {
    this._api.getAllMovies().subscribe(res => this.allMovies = res);
    // this._api.getOneMovie().subscribe(res => this.movie = res);
  }

}
