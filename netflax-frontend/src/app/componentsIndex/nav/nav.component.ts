import { Links } from './../../models/links';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public links : Links[];

  constructor() { 
    this.links = [];
  }

  ngOnInit(): void {
    this.links.push(new Links('Home', '/home'));
    this.links.push(new Links('Movies', '/movies',));
    // this.links.push(new Links('All', 'movies/all'));
    // this.links.push(new Links('types', 'movies/types'));
    // this.links.push(new Links('release-date', 'movies/release-date'));
    // this.links.push(new Links('movie', '/movies/:id'));
    this.links.push(new Links('Actors', '/all-actors'));
    // this.links.push(new Links('actor', '/actor'));


  }

}
