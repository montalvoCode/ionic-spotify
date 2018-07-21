import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpotifyProvider } from '../../providers/spotify/spotify';
import { ArtistAlbumsPage } from '../artist-albums/artist-albums';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private items:any[];

  constructor(public navCtrl: NavController, private _provider : SpotifyProvider) {

  }

  search(event:any){
    let value = event.target.value;
    console.log(value);
    this._provider.searchArtists(value).subscribe(
      data => {
        console.log(data);
        this.items = data.artists.items;
      },error => {
        console.log(error);
      }
    )    
  }

  searchAlbums(id:string, name:string){
    this.navCtrl.push(ArtistAlbumsPage,{
      id:id,
      name:name
    });
  }

}
