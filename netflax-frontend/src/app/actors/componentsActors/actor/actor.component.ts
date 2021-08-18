import { ActivatedRoute } from '@angular/router';
import { MoviesAPIService } from './../../../services/movies-api.service';
import { ActorAll } from './../../../models/actor-all';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  public actor?: ActorAll;
  private _id: number = 0;

  constructor(private _api : MoviesAPIService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(p => {
      this._id = p.id;
      this._api.getOneActor(this._id).subscribe(res =>{
        console.log(res)
         this.actor = res;
         this._api.getAllMoviesByActorId(this._id).subscribe(res => {
          if(this.actor){
            this.actor.Movie = res;
          }
        });
      });
      
    })
  }

}
