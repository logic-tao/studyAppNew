import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
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
  listData: any;
  // 科目
  subject: string;
  //登录用户ID
  user: string = localStorage.getItem("user");



  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http,public app:App) {
    this.subject = navParams.get("id");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MistakelistPage');
    console.log("科目："+ this.subject);
    this.http.request("http://101.201.238.157/index/request_record_list/" + this.user + "/" + this.subject)
      .subscribe((res: Response) => {
        this.listData = res.json();
        console.log(this.listData);
      });
  }


  itemSelectedchild(event, j, itemch) {
    event.stopPropagation();
    //this.app.getRootNav().push('PageexamPage',{type:0,id:1});
    this.app.getRootNav().push('MistakeDetailPage', {subject: itemch.cname, cid: itemch.id});
    console.log(j)
  }

  itemSelected(j, item) {
    console.log(this.listData[j])
    if (this.listData[j].sub_knowledege.length == 0) {
      //this.app.getRootNav().push('PageexamPage',{type:0,id:this.listData[j].id});
      this.app.getRootNav().push('MistakeDetailPage', {subject: item.cname, cid: item.id});
    } else {
      for (var i = 0; i < this.listData.length; i++) {
        if (i == j) {
          if (this.listData[i].open) {
            this.listData[i].open = false
          } else {
            this.listData[i].open = true
          }
        } else {
          this.listData[i].open = false
        }
      }
    }


  }
}
