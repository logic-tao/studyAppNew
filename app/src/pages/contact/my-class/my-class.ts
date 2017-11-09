import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApplyClassPage} from "./apply-class";
import {Http,Response} from "@angular/http";

/**
 * Generated class for the MyClassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-class',
  templateUrl: 'my-class.html',
})
export class MyclassPage {


  listData:Object;

  add(){
    this.navCtrl.push(ApplyClassPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyclassPage');
    this.http.request('http://101.201.238.157/index/request7/3333')
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }

}
export class Data {
  constructor(public ClassName: string,
              public ClassCode: number,
              public Teacher: string,
  ){

  }
}
