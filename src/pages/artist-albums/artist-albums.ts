import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpotifyProvider } from '../../providers/spotify/spotify';

@IonicPage()
@Component({
  selector: 'page-artist-albums',
  templateUrl: 'artist-albums.html',
})
export class ArtistAlbumsPage {
  private id:string;
  private name:string;
  private albums:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _provider : SpotifyProvider) {
    this.id = this.navParams.get("id");
    this.name = this.navParams.get("name");
    this.getAlbums();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistAlbumsPage');
  }

  getAlbums(){
    this._provider.searchAlbums(this.id).subscribe(
      data => {
        this.albums = data.items;
      },
      error =>{
        console.log(error);
      }
    );
  }
}
