import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IsmPage } from '../ism/ism';
import { BitPage } from '../bit/bit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
   ism(){
     this.navCtrl.push(IsmPage)
   }
   bit(){
    this.navCtrl.push(BitPage)
  }

}
