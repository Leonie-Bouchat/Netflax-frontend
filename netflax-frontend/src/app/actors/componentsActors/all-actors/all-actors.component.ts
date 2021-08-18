import { MoviesAPIService } from './../../../services/movies-api.service';
import { Actor } from './../../../models/actor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-actors',
  templateUrl: './all-actors.component.html',
  styleUrls: ['./all-actors.component.scss']
})
export class AllActorsComponent implements OnInit {

  public allActors: Actor[] = [];

  constructor(private _api: MoviesAPIService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._api.getAllActors().subscribe(res => this.allActors = res)
  }

}
