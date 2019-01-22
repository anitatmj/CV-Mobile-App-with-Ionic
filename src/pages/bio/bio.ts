import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bio',
  templateUrl: 'bio.html',
})
export class BioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BioPage');
  }

}
