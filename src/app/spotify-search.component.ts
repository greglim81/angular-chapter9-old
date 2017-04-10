import { Component, Output, ElementRef, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

import { FormControl } from '@angular/forms';  
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'spotify-search',
  template: `
    <h1>Spotify Search</h1>
    <input 
        class="form-control"
      [formControl]="searchBox" 
      placeholder="Search Spotify artist" />

    <div *ngFor=" let artists of results | async"> 
        {{ artists.name }} -- Followers {{artists.followers.total}} -- Popularity {{ artists.popularity }}        
    </div>
  `
})
export class SpotifySearchComponent {

  private searchBox = new FormControl();

  constructor(private _http: Http){

  }

  ngAfterViewInit() {  
    var keyups = this.searchBox
        .valueChanges
        .debounceTime(200)
        .map(searchTerm => {
            return this.getResults(searchTerm);           
        });
        
    var subscription = keyups.subscribe(res => console.log(res));       
  }

  getResults(searchTerm){           
    return this._http.get('https://api.spotify.com/v1/search?q=' + searchTerm + '&type=artist')
      .map(response => {
            response.json();                                    
      }, error => console.log('Could not load artists'));            
  }  
}

    
        //var artists = response.json();
        // console.log(artists.artists.items)
        // return artists;//.artists.items;    
      
      /*
      .subscribe(result => {
        this.dataObserver.next(result);
      });
      */