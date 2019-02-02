import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ism1Page } from '../ism1/ism1';
import { Ism2Page } from '../ism2/ism2';
import { Ism3Page } from '../ism3/ism3';
import { Ism4Page } from '../ism4/ism4';

/**
 * Generated class for the IsmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ism',
  templateUrl: 'ism.html',
})
export class IsmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IsmPage');
  }

  ism1(){
    this.navCtrl.push(Ism1Page)
  }
  ism2(){
   this.navCtrl.push(Ism2Page)
 }
 ism3(){
  this.navCtrl.push(Ism3Page)
}
ism4(){
  this.navCtrl.push(Ism4Page)
}

}
