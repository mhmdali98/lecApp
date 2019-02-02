import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Ism1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ism1',
  templateUrl: 'ism1.html',
})
export class Ism1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ism1Page');
  }
  event1(){
    const alert = this.alertCtrl.create({
      subTitle:'Is the first step to start learning programming and deals with system analysis and design with planning to develop information systems by understanding and determining what the system should do and how it can implement system components and work together.',
      buttons: ['OK']
    });
    alert.present();
  }
  event2(){
    const alert = this.alertCtrl.create({
      subTitle: ' It is a specialized subject of digital electronic circuits and how to convert binary (binary, decimal, etc.). Logical functions can be implemented practically using electronic gates.',
      buttons: ['OK']
    });
    alert.present();
  }
  event3(){
    const alert = this.alertCtrl.create({
      subTitle:'One of the topics that deals with the study of mathematical structures that are essentially separate and not continuous. Objects are taught in separate mathematics - such as integers, graphs and statements in logic.  ',
      buttons: ['OK']
    });
    alert.present();
  }
  event4(){
    const alert = this.alertCtrl.create({
      subTitle:'Is a study of a set of procedures and administrative units for data collection, processing and presentation of results to users where information systems are classified on the basis of methods of information use',
      buttons: ['OK']
    });
    alert.present();
  }
  event5(){
    const alert = this.alertCtrl.create({
      subTitle:'Is one of law lessons that explains the concept of human rights and privileges or the power that man possesses under the law as well as the duties that he must abide by',
      buttons: ['OK']
    });
    alert.present();
  }
  event6(){
    const alert = this.alertCtrl.create({
      subTitle:'Of lectures that specialize in the study of the English language (conversations, rules, comprehension, etc.) but are studied in a simple way',
      buttons: ['OK']
    });
    alert.present();
  }
  event7(){
    const alert = this.alertCtrl.create({
      subTitle:'Is one of the most important languages in programming and most commonly where it contains a lot of high - level features where it supports structured programming used in programming applications',
      buttons: ['OK']
    });
    alert.present();
  }

}
