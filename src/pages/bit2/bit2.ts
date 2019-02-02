import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Bit2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bit2',
  templateUrl: 'bit2.html',
})
export class Bit2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bit2Page');
  }
  event1(){
    const alert = this.alertCtrl.create({
      subTitle:'Is one of the programming languages to serve as the mind of the thinker used in the operation of practical devices, which is a language easy to learn and most often used in applications and games',
      buttons: ['OK']
    });
    alert.present();
  }
  event2(){
    const alert = this.alertCtrl.create({
      subTitle: 'Is a set of rules that study the best possible ways for management to obtain a financial profit and provide the ability to finance all tasks within the institution',
      buttons: ['OK']
    });
    alert.present();
  }
  event3(){
    const alert = this.alertCtrl.create({
      subTitle:'Of lectures that specialize in the study of the English language (conversations, rules, comprehension, etc.) but are studied in a simple way',
      buttons: ['OK']
    });
    alert.present();
  }
  event4(){
    const alert = this.alertCtrl.create({
      subTitle:'Is a process of writing instructions and directing orders aimed at creating and building web pages, especially in the language of php where it contains the functions of software and offices to accomplish different jobs',
      buttons: ['OK']
    });
    alert.present();
  }
  event5(){
    const alert = this.alertCtrl.create({
      subTitle:'Is the subjects that deals with how to deal with data, such as data retrieval or addition or modification, the main purpose is to organize data',
      buttons: ['OK']
    });
    alert.present();
  }
  event6(){
    const alert = this.alertCtrl.create({
      subTitle:'Is one of the most important languages in programming and most commonly where it contains a lot of high - level features where it supports structured programming used in programming applications',
      buttons: ['OK']
    });
    alert.present();
  }
  event7(){
    const alert = this.alertCtrl.create({
      subTitle:'Means to determine the quality of the product through knowledge of the requirements of the market in terms of quality and quality has been determined the necessary amount of the main production elements, ie human elements and the type of materials needed for production and others',
      buttons: ['OK']
    });
    alert.present();
  }

}
