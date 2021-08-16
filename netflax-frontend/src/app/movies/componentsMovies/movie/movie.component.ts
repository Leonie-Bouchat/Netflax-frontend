import { Movie } from './../../../models/movie';
import { MoviesAPIService } from './../../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movie?: Movie;
  private _id?: number;

  constructor(private _api: MoviesAPIService, private _route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      (params:any) => this.onIdreceived(params)
    )

  }

  private onIdreceived(params:Params){
    this._id = parseInt(params['id']);
    this._api.getOneMovie(this._id).subscribe(res => this.movie = res);
  }

}
