import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Ism2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ism2',
  templateUrl: 'ism2.html',
})
export class Ism2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ism2Page');
  }

  event1(){
    const alert = this.alertCtrl.create({
      subTitle:'Is one of the lessons that illustrate the way data collection and synthesis in a way that enables us to carry out operations on them, as it depends on the design process of storage in the computer in an effective and uncomplicated',
      buttons: ['OK']
    });
    alert.present();
  }
  event2(){
    const alert = this.alertCtrl.create({
      subTitle: ' Is one of the most important branches of accounting competent to record, categorize, summarize, interpret and display historical accounting information relating to the financial situation',
      buttons: ['OK']
    });
    alert.present();
  }
  event3(){
    const alert = this.alertCtrl.create({
      subTitle:'  ',
      buttons: ['OK']
    });
    alert.present();
  }
  event4(){
    const alert = this.alertCtrl.create({
      subTitle:'One of the areas of regulation that outlines the framework of policies, processes and procedures used by organizations to ensure their ability to accomplish the dossiers',
      buttons: ['OK']
    });
    alert.present();
  }
  event5(){
    const alert = this.alertCtrl.create({
      subTitle:'Is one of the programming languages of a high level, characterized by simplicity of writing, easy to learn and used in many areas as in the graphical interfaces',
      buttons: ['OK']
    });
    alert.present();
  }
  event6(){
    const alert = this.alertCtrl.create({
      subTitle:'Is the subjects that deals with how to deal with data, such as data retrieval or addition or modification, the main purpose is to organize data',
      buttons: ['OK']
    });
    alert.present();
  }
  event7(){
    const alert = this.alertCtrl.create({
      subTitle:'Is one of the branches of mathematics is interested in studying the spaces destined for transfers of linear and nonlinear systems',
      buttons: ['OK']
    });
    alert.present();
  }
}
