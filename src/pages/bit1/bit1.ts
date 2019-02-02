import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Bit1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bit1',
  templateUrl: 'bit1.html',
})
export class Bit1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bit1Page');
  }
  event1(){
    const alert = this.alertCtrl.create({
      subTitle:'Is a term that shows some systems that try to emulate true incorporation where technology demonstrates in systems',
      buttons: ['OK']
    });
    alert.present();
  }
  event2(){
    const alert = this.alertCtrl.create({
      subTitle: ' about systems in computers',
      buttons: ['OK']
    });
    alert.present();
  }
  event3(){
    const alert = this.alertCtrl.create({
      subTitle:'Of lectures that specialize in the study of the English language (conversations, rules, comprehension, etc.) but are studied in a simple way ',
      buttons: ['OK']
    });
    alert.present();
  }
  event4(){
    const alert = this.alertCtrl.create({
      subTitle:'Is one of law lessons that explains the concept of human rights and privileges or the power that man possesses under the law as well as the duties that he must abide by',
      buttons: ['OK']
    });
    alert.present();
  }
  event5(){
    const alert = this.alertCtrl.create({
      subTitle:'Is the first step to start learning programming and deals with system analysis and design with planning to develop information systems by understanding and determining what the system should do and how it can implement system components and work together.',
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
      subTitle:'Business mathematics is mathematics used by commercial enterprises to record and manage business operations. Commercial organizations use mathematics in accounting, inventory management, marketing, sales forecasting, and financial analysis.',
      buttons: ['OK']
    });
    alert.present();
  }

}
