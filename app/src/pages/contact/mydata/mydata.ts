import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MydatadetailPage} from "./mydatadetail";

/**
 * Generated class for the MydataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mydata',
  templateUrl: 'mydata.html',
})
export class MydataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MydataPage');
  }

  toMyDataDetail(){
    this.navCtrl.push('MydatadetailPage');
  }
}
