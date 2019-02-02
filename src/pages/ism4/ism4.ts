import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Ism4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ism4',
  templateUrl: 'ism4.html',
})
export class Ism4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ism4Page');
  }
  event1(){
    const alert = this.alertCtrl.create({
      subTitle:' it is about the structure of an enterprise’s components,their inter-relationships , principles and guidelines governing their design and evolution over time.',
      buttons: ['OK']
    });
    alert.present();
  }
  event2(){
    const alert = this.alertCtrl.create({
      subTitle: ' it is about viewing and modeling the world (or any other system) as a set of interacting and interrelated objects.',
      buttons: ['OK']
    });
    alert.present();
  }
  event3(){
    const alert = this.alertCtrl.create({
      subTitle:' process or software of managing all resources and their use in the entire enterprise in a coordinated manner it consolidates an enterprise’s planning, manufacturing, sales, marketing and other departments efforts into one management system. ',
      buttons: ['OK']
    });
    alert.present();
  }
  event4(){
    const alert = this.alertCtrl.create({
      subTitle:'Network and system administration is a branch of engineering that concerns the operational management of human–computer systems. It is about putting together a network of computers (workstations, PCs and supercomputers), getting them running and then keeping them running in spite of the activities of users who tend to cause the systems to fail.System administration has some kind of coherence across the widely different environments in which people find themselves responsible for computers.',
      buttons: ['OK']
    });
    alert.present();
  }
  event5(){
    const alert = this.alertCtrl.create({
      subTitle:'it is about describing a new class of network based computing that take place over the internet .. the most important terms or services that cloud computing provides are Saas, paas ,iaas . ',
      buttons: ['OK']
    });
    alert.present();
  }
  

}
