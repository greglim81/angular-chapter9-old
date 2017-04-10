import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Artist } from './artist';

@Injectable()
export class SpotifyService{
    constructor(private _http: Http){

    }

    getSpotifyData(_searchTerm) {
        return this._http.get("https://api.spotify.com/v1/search?q=" + _searchTerm + "&type=artist")
            .map(res => res.json());
    }
}