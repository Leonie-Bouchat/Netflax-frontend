import { MoviesAPIService } from './../../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movie: any;
  private _id?: any;

  constructor(private _api: MoviesAPIService) { 
  }

  ngOnInit(): void {
    this._api.getOneMovie(this._id).subscribe(res => this.movie = res);
  }

}
