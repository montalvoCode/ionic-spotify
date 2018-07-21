import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyProvider {

  private baseUrl : string = "https://api.spotify.com/v1";
  private searchUrl : string = this.baseUrl + '/search?q=';
  private albumsUrl : string = this.baseUrl + '/artists/';
  private albumUrl : string = this.baseUrl + '/albums/';
  private auth_token : string = "Bearer BQCdcxh0o71Wn3w_5m8gG76-n_mOogqJWsNmVdL8q6UTD-NE8EIwqzkLt4Wy_Mb5995QQBOgHbVhIZnNcgq9pk1_6O8xb5vjHPLYEIzPDHz8EjWt-z1fGJlO-Sqjtt6q1gNDNedRYqeXmg";
  private requestHeader = new HttpHeaders().set('Content-Type', 'application/json').append('Authorization',this.auth_token);

  constructor(public http: HttpClient) {
    console.log('Hello SpotifyProvider Provider');
  }

  searchArtists(name : string){
    return this.http.get(this.searchUrl + name + '&type=artist', {headers: this.requestHeader});
  }

  searchAlbums(id : string){
    return this.http.get(this.albumsUrl + id + '/albums', {headers: this.requestHeader});
  }

  searchAlbum(id : string){
    return this.http.get(this.albumsUrl + id, {headers: this.requestHeader});
  }

}
