import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'NewAnuncioPage'
})
@Component({
  selector: 'page-new-anuncio',
  templateUrl: 'new-anuncio.html',
})
export class NewAnuncioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAnuncioPage');
  }

}
