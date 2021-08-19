import { Movie } from './../../../models/movie';
import { Type } from './../../../models/type';
import { MoviesAPIService } from './../../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  public allTypes: Type[] = [];
  public allMoviesOfThisType: Movie[] = []

  constructor(private _api: MoviesAPIService) { }

  ngOnInit(): void {
    this._api.getAllTypes().subscribe(res => this.allTypes = res);
  }

  public ShowMoviesOfThisType(id: number){
    this._api.getAllMoviesByTypeId(id).subscribe(res => this.allMoviesOfThisType = res);
  }
}
