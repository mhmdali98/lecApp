import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bit1Page } from '../bit1/bit1';
import { Bit2Page } from '../bit2/bit2';
import { Bit3Page } from '../bit3/bit3';
import { Bit4Page } from '../bit4/bit4';

/**
 * Generated class for the BitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bit',
  templateUrl: 'bit.html',
})
export class BitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BitPage');
  }

  bit1(){
    this.navCtrl.push(Bit1Page)
  }
  bit2(){
   this.navCtrl.push(Bit2Page)
 }
 bit3(){
  this.navCtrl.push(Bit3Page)
}
bit4(){
  this.navCtrl.push(Bit4Page)
}

}
