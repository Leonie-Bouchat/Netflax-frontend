import { Movie } from './../../../models/movie';
import { MoviesAPIService } from './../../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-release-date',
  templateUrl: './release-date.component.html',
  styleUrls: ['./release-date.component.scss']
})
export class ReleaseDateComponent implements OnInit {

  public allMovies: Movie[] = [];

  constructor(private _api: MoviesAPIService) { }

  ngOnInit(): void {
    this._api.getAllMoviesByDate().subscribe(res => this.allMovies = res);
  }

  public goToUp(){
    document.body.scrollIntoView({behavior: "smooth", block: "start", inline:"nearest"})
  }
}
