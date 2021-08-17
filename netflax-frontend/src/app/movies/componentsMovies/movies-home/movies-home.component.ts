import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent implements OnInit {

  title: boolean = false;
  date: boolean = false;
  type: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showTitle(){
    this.title = true;
    this.date = false;
    this.type = false;
  }

  public showDate(){
    this.title = false;
    this.date = true;
    this.type = false;
  }

  public showType(){
    this.title = false;
    this.date = false;
    this.type = true;
  }

}
