import { Movie } from './../../../models/movie';
import { MoviesAPIService } from './../../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Type } from 'src/app/models/type';

@Component({
  selector: 'app-one-type',
  templateUrl: './one-type.component.html',
  styleUrls: ['./one-type.component.scss']
})
export class OneTypeComponent implements OnInit {

  public allMoviesByType: Movie[] = []
  public type?: Type;
  public img: string = "https://image.tmdb.org/t/p/w500";
  public id: number = 0;

  constructor(private _api: MoviesAPIService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(p => {
      this.id = p.id;
      this._api.getAllMoviesByTypeId(this.id).subscribe(res => {
        this.allMoviesByType = res;
        this._api.getOneType(this.id).subscribe(res => this.type = res);
      })
      
    });
  }

  public changeImage(image: HTMLImageElement){
    image.src='/assets/img.jpg';
  }

  public goToUp(){
    document.body.scrollIntoView({behavior: "smooth", block: "start", inline:"nearest"})
  }
}
