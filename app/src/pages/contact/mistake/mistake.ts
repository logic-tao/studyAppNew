import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {MistakeListPage} from "./mistake-list";
import {Http,Response} from "@angular/http";

/**
 * Generated class for the MistakePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mistake',
  templateUrl: 'mistake.html',
})
export class MistakePage {
  //用户id
  user: string = localStorage.getItem("user");
  //接收数据
  data:any;
  //错题数
  yuNum:string;
  shuNum:string;
  yingNum:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public app:App) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MistakePage');

    this.http.request('httP://101.201.238.157/index/request_wrong_count/' + this.user)
      .subscribe((res: Response) => {
        this.yuNum = res.json()["1"];
        this.shuNum = res.json()["2"];
        this.yingNum = res.json()["3"];

      });
  }

  toMistakeDetail(id) {
    this.app.getRootNav().push(MistakeListPage,{
      id:id
    });
  }
}


