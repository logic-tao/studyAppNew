import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import {PageexamPage} from '../pageexam/pageexam';

/**
 * Generated  class for the Pageexam01Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic
 * pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pageexam01',
  templateUrl: 'pageexam01.html',
})
export class Pageexam01Page {
    listDetailData :Object;
    number: number = 0;


  // 返回上一题
  beforeSubject(){
    this.navCtrl.pop('PageexamPage');
  }
  // 返回下一题
  nextSubject(){

  }

  //收藏
  add(){

    alert("收藏成功");
     this.http.request('http://101.201.238.157/demo/index/collect').subscribe();
    //  this.http.request('http://sapi.bainid.com/demo/index/collect').subscribe();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagenextPage');

    this.http.request('http://101.201.238.157/index/requestMess')

      .subscribe((res: Response) => {
        this.listDetailData = res.json();
      });

    // this.http.request('http://sapi.bainid.com/index/requestMess')

    //   .subscribe((res: Response) => {
    //     this.listDetailData = res.json();
    //   });
  }

}
