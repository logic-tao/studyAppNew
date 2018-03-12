import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PagedetailPage} from "../../pagedetail/pagedetail";
import {Response,Http} from "@angular/http";
import {PageexamPage} from "../../pageexam/pageexam";

/**
 * Generated class for the CollectionTestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection-test',
  templateUrl: 'collection-test.html',
})
export class CollectionTestPage {
  // 接收题目
  test: Object;
  // 接收知识点id
  cid: any;
  // 接收知识点名字
  cname:string;
  //登录用户ID
  user: string = localStorage.getItem("user");
  //知识点id
  subject_id: string;
  //题目序号
  test_number: number;
  //题目总数
  count:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http,public app: App) {
    this.test_number = 1;
    this.cid = navParams.get("cid");
    this.cname = navParams.get("subject");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MistakeDetailPage');
    this.http.request("http://47.100.203.126:81/index.php/index/request_collect_test/"+this.user+"/" + this.cid)
      .subscribe((res: Response) => {
        this.test = res.json();
        console.log(this.test);
        this.count = res.json().length;
      });

  }

  itemSelected(){
    this.app.getRootNav().push('PagedetailPage');

  }

  // 跳转到下一页 或返回知识点列表
  nextSubject(){
    if (this.test_number < this.count) {
      this.test_number ++;
    }else {
      this.app.getRootNav().pop();
    }

  }
  //跳转到上一题
  leftSubject() {
    if (this.test_number == 1) {

    }else {
      this.test_number --;
    }
  }

  //跳转到下一个页面
  nextPage(){
    this.app.getRootNav().push('PageexamPage');

  }

}
