import { Movie } from './../../../models/movie';
import { MoviesAPIService } from './../../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-type',
  templateUrl: './one-type.component.html',
  styleUrls: ['./one-type.component.scss']
})
export class OneTypeComponent implements OnInit {

  public allMoviesByType: Movie[] = []

  constructor(private _api: MoviesAPIService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(p => {
      let id = p.id;
      this._api.getOneType(id).subscribe(res => {this.allMoviesByType = res})
    });
  }

}
