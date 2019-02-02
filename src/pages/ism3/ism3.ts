import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Ism3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ism3',
  templateUrl: 'ism3.html',
})
export class Ism3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ism3Page');
  }
 
  event1(){
    const alert = this.alertCtrl.create({
      subTitle:'Mobile computing is human–computer interaction by which a computer is expected to be transported during normal usage, which allows for transmission of data, voice and video. Mobile computing involves mobile communication, mobile hardware, and mobile software. Communication issues include ad hoc networks and infrastructure networks as well as communication properties, protocols, data formats and concrete technologies. Hardware includes mobile devices or device components. Mobile software deals with the characteristics and requirements of mobile applications.',
      buttons: ['OK']
    });
    alert.present();
  }
  event2(){
    const alert = this.alertCtrl.create({
      subTitle: 'In the leactures describes the activities and commercial transactions that are carried out using information technologies and means of communication and the Internet, showing the benefits of using e-commerce for individuals and institutions.',
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
      subTitle:'A specialized topic in teaching how to secure the information circulating through the Internet from the risks that threaten them in different ways that guarantee encryption of all kinds',
      buttons: ['OK']
    });
    alert.present();
  }
  event5(){
    const alert = this.alertCtrl.create({
      subTitle:'One of the topics of management aims to improve the performance of the product and its development as it focuses on the performance of work in the right way to reach the required quality',
      buttons: ['OK']
    });
    alert.present();
  }
  event6(){
    const alert = this.alertCtrl.create({
      subTitle:'Is one of the branches of computer science showing the behavior and characteristics of certain computer programs that make it emulate human mental abilities',
      buttons: ['OK']
    });
    alert.present();
  }

}
