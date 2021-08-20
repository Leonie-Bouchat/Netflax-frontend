import { Type } from './../../../models/type';
import { MovieAll } from './../../../models/movie-all';
import { MoviesAPIService } from './../../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movie?: MovieAll;
  private _id: number = 0;
  // public type: Type[] = []
  public img: string = "https://image.tmdb.org/t/p/w500";
  public video:string;


  constructor(private _api: MoviesAPIService, private _route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this._route.params.subscribe(p => {
      this._id = p.id;
      this._api.getOneMovie(this._id).subscribe(res =>{
         this.movie = res
         if(this.movie){
          this.video = this.movie.Trailer.replace("watch?v=", "embed/");
          console.log(this.video);
         }
         this._api.getAllTypesByMovieId(this._id).subscribe(res => {
          if(this.movie){
            this.movie.Type = res;
          }
        });
        this._api.getAllActorsByMovieId(this._id).subscribe(res => {
          if(this.movie){
            this.movie.Actor = res;
          }
        })
      });
    })
  }
  public changeImage(image: HTMLImageElement){
    image.src='/assets/img.jpg';
  }
}
