import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http,Response} from "@angular/http";
import {HomeworkTestPage} from "./homework-test";

/**
 * Generated class for the HomeworkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homework',
  templateUrl: 'homework.html',
})
export class HomeworkPage {

  // 接收数据
  listData: Object;
  // 课程
  subject: string ="1";
  user: string = localStorage.getItem("user");

  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworkPage');

    this.http.request('http://101.201.238.157/index/request_homework_list/'+ this.user+"/"+this.subject)
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }

  tohomework(hid,name){
    this.app.getRootNav().push(HomeworkTestPage,{"hid":hid,"subject":name});
  }


}
