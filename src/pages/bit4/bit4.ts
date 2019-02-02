import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Bit4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bit4',
  templateUrl: 'bit4.html',
})
export class Bit4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bit4Page');
  }
  event1(){
    const alert = this.alertCtrl.create({
      subTitle:'A specialized topic in teaching how to secure the information circulating through the Internet from the risks that threaten them in different ways that guarantee encryption of all kinds',
      buttons: ['OK']
    });
    alert.present();
  }
  event2(){
    const alert = this.alertCtrl.create({
      subTitle: 'It is a management issue and it is a tool that helps investors to identify the best investment, evaluate the possibilities, identify the risks and determine the value of those investments',
      buttons: ['OK']
    });
    alert.present();
  }
  event3(){
    const alert = this.alertCtrl.create({
      subTitle:'The system of mathematical equations where the output of the equation is one part of the other inputs or is the system of mathematical equations where the output of the equation is one part of a number of inputs',
      buttons: ['OK']
    });
    alert.present();
  }
  event4(){
    const alert = this.alertCtrl.create({
      subTitle:'Is an area that is looking at the design of the use of computer technology with a focus on the interfaces and how to develop and modify them',
      buttons: ['OK']
    });
    alert.present();
  }
  event5(){
    const alert = this.alertCtrl.create({
      subTitle:'Is an area that is looking at the design of the use of computer technology with a focus on the interfaces and how to develop and modify them',
      buttons: ['OK']
    });
    alert.present();
  }



}
