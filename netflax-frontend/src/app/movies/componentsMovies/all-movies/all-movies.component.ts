import { Movie } from './../../../models/movie';
import { MoviesAPIService } from './../../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  public allMovies: Movie[] = [];
  public movie: any;
  public img: string = "https://image.tmdb.org/t/p/w500";

  constructor(private _api: MoviesAPIService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._api.getAllMovies().subscribe(res => this.allMovies = res);
  }

  public changeImage(image: HTMLImageElement){
    image.src='/assets/img.jpg';
  }

  public goToUp(){
    document.body.scrollIntoView({behavior: "smooth", block: "start", inline:"nearest"})
  }
}
