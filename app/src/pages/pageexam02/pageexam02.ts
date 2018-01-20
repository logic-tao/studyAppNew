import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
/**
 * Generated class for the Pageexam02Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'Pageexam02Page',
  segment: 'Pageexam02Page'
})
@Component({
  selector: 'page-pageexam02',
  templateUrl: 'pageexam02.html',
})
export class Pageexam02Page {
listDetailData :Object;

addMore(){


}


  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagenextPage');

    this.http.request('httP://222.73.69.146:8088/index/requestMess')
      .subscribe((res: Response) => {
        this.listDetailData = res.json();
      });
      //     this.http.request('http://sapi.bainid.com/index/requestMess')
      // .subscribe((res: Response) => {
      //   this.listDetailData = res.json();
      // });
  }

}
