import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Response} from "@angular/http";

/**
 * Generated class for the VideosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  // 接收数据
  listData: Object;
  // 课程
  subject: string ="1";

  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworkPage');

    this.http.request('http://101.201.238.157')
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }

}
