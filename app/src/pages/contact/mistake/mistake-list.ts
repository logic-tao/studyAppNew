import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Response} from "@angular/http";
import {MistakeDetailPage} from "./mistake-detail";

/**
 * Generated class for the MistakeListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mistake-list',
  templateUrl: 'mistake-list.html',
})
export class MistakeListPage {
  // 接收数据
  mistakeData: Object;
  // 科目
  subject: number;
  //登录用户ID
  login_id: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
    this.subject = navParams.get("id");
    this.login_id = "1111";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MistakelistPage');
    // 网络请求
    //http://js onplaceholder.typicode.com/photos


    this.http.request('httP://101.201.238.157/index/request2/' + this.login_id)
      .subscribe((res: Response) => {
        this.mistakeData = res.json();
      });
  }

  itemSelected(item,kid){
    console.log(kid);
    this.navCtrl.push(MistakeDetailPage,{type:0,id:1});
  }


}
