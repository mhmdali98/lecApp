import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Bit3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bit3',
  templateUrl: 'bit3.html',
})
export class Bit3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bit3Page');
  }
  event1(){
    const alert = this.alertCtrl.create({
      subTitle:'These lectures explain the concept of networks and what types and forms, as well as show the benefits of networks and how to use them in business',
      buttons: ['OK']
    });
    alert.present();
  }
  event2(){
    const alert = this.alertCtrl.create({
      subTitle: 'Means to determine the quality of the product through knowledge of the requirements of the market in terms of quality and quality has been determined the necessary amount of the main production elements, ie human elements and the type of materials needed for production and others',
      buttons: ['OK']
    });
    alert.present();
  }
  event3(){
    const alert = this.alertCtrl.create({
      subTitle:'Is one of the topics that shows the concept of working in groups and what are the benefits of teamwork and communication skills among individuals in groups',
      buttons: ['OK']
    });
    alert.present();
  }
  event4(){
    const alert = this.alertCtrl.create({
      subTitle:'Is an approach to managing the interaction of the company with its current and future customers. This approach works to analyze the date data of the customers history with the company in order to improve the best commercial relationship with the customers',
      buttons: ['OK']
    });
    alert.present();
  }
  event5(){
    const alert = this.alertCtrl.create({
      subTitle:'It is a branch of knowledge that defines business needs and identifies solutions to their problems where they can consist of practical improvements or adaptive changes',
      buttons: ['OK']
    });
    alert.present();
  }
  event6(){
    const alert = this.alertCtrl.create({
      subTitle:'It is a specialized approach to the organization and management of resources, such as human resources, by means of which the project can be implemented with respect to its specific content, taking into consideration the factors of quality, timing and cost',
      buttons: ['OK']
    });
    alert.present();
  }
 

}
