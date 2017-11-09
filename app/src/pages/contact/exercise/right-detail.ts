import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Response} from "@angular/http";
import {PagedetailPage} from "../../pagedetail/pagedetail";
import {PageexamPage} from "../../pageexam/pageexam";

/**
 * Generated class for the RightDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-right-detail',
  templateUrl: 'right-detail.html',
})
export class RightDetailPage {
  // 接收题目
  test: Object;
  // 接收知识点名字
  subject: Object;
  //登录用户ID
  login_id: string;
  //知识点id
  subject_id: string;
  //题目序号
  test_number: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
    this.test_number = 1;
    this.subject = navParams.get("subject");
    this.subject_id = navParams.get("kid");
    this.login_id = '1111';
    //this.subject_id = '11';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagenextPage');
    console.log(this.subject_id);
    this.http.request('httP://101.201.238.157/index/request5/' + this.login_id + '/' + this.subject_id)
      .subscribe((res: Response) => {
        this.test = res.json();
      });

  }

  itemSelected(){
    this.navCtrl.push(PagedetailPage);

  }

  // 跳转到下一页 或返回知识点列表
  nextSubject(){
    if (this.test_number < 2) {
      this.test_number ++;
    }else {
      this.navCtrl.pop();
    }

  }
  //跳转到上一题
  leftSubject() {
    if (this.test_number == 1) {

    }else {
      this.test_number --;
    }
  }

  add(){
    //将题添加到后台数ll据库中 sfds
    alert("收藏成功");
    this.http.request('http://101.201.238.157/demo/index/collect').subscribe();

  }

  //跳转到下一个页面
  nextPage(){
    this.navCtrl.push(PageexamPage);

  }



}
