import {Component, Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import {ExerciseDetailPage} from "../contact/exercise/exercise-detail";

import {Subject} from "rxjs";
/**
 * Generated class for the PagedetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagedetail',
  templateUrl: 'pagedetail.html',
})
export class PagedetailPage {
  get getMess(): Object {
    return this._getMess;
  }

  set getMess(value: Object) {
    this._getMess = value;
  }
  // 接收数据
  listDetailData: Object;
  number:number =0;
  item:number;
  color1:string;
  color2:string;
  color3:string;
  color4:string;

  @Input()


  //定义一个接收上级参数的对象
  private  _getMess : Object;

  // 收藏
  add(){
    //将题添加到后台数ll据库中 sfds
    alert("收藏成功");
    this.http.request('http://47.100.203.126:81/demo/index/collect?kid=1001&uid=111').subscribe();
    // this.http.request('http://sapi.bainid.com/demo/index/collect?kid=1001&uid=111').subscribe();

  }

  //
  //跳转到下一个页面
  nextPage(num){
    setTimeout(()=>{
      this.number++;
    },800);

    if (num==1){
      this.color1 = "red";
    }else if (num==2){
      this.color2 = "red";

    }else  if (num==3){
      this.color3 = "red";
    }else  if (num==4){
      this.color4 = "red";
    }

    //实现选择一个button然后呈现选中的状态

    setTimeout(()=>{
      this.color1 = "black";
      this.color2 = "black";
      this.color3 = "black";
      this.color4 = "black";
    },800);

    if (this.number>2){

      this.navCtrl.push(ExerciseDetailPage);
    }

    // 记录做题信息



  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
    this._getMess = navParams.get("subject");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagenextPage');

    this.http.request('' +
      'httP://47.100.203.126:81/index/requestMess')
      .subscribe((res: Response) => {
        this.listDetailData = res.json();
      });
      //     this.http.request('' +
      // 'http://sapi.bainid.com/index/requestMess')
      // .subscribe((res: Response) => {
      //   this.listDetailData = res.json();
      // });
  }

  itemSelected(){
    this.navCtrl.push(PagedetailPage);

  }



}

