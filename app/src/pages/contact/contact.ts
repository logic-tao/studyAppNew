import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PersonPage} from "./my/person";
import {ExercisePage} from "./exercise/exercise";
import {MistakePage} from "./mistake/mistake";
import {HomeworkPage} from "./homework/homework";
import {VideosPage} from "./videos/videos";
import {CollectionPage} from "./collection/collection";
import {MyclassPage} from "./my-class/my-class";
import {MydataPage} from "./mydata/mydata";
import {Http,Response} from "@angular/http";
import {SettingPage} from "./setting/setting";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  //用户id
  login_id :string;
  //listData
  listData : Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
    //this.login_id = localStorage.getItem("Login_id");
    this.login_id = "1111";
  }


  ionViewDidLoad() {
    console.log(this.login_id);
    console.log('ionViewDidLoad RegisterPage');
    this.http.request('httP://101.201.238.157/index/request1/' + this.login_id)
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }

  //跳转到我
  toPerson() {
    this.navCtrl.push(PersonPage);
  }
  //跳转到练习记录
  toExercise() {
    this.navCtrl.push(ExercisePage);
  }
  //跳转到错题本
  toMistake() {
    this.navCtrl.push(MistakePage);
  }
  //跳转到我的作业
  toHomeWork() {
    this.navCtrl.push(HomeworkPage);
  }
  //跳转我的精讲
  toVideos() {
    this.navCtrl.push(VideosPage);
  }
  //跳转我的收藏
  toMycollection() {
    this.navCtrl.push(CollectionPage);
  }
  //跳转到我的班级
  toMyclass() {
    this.navCtrl.push(MyclassPage);
  }
  //跳转我的资料
  todata() {
    this.navCtrl.push(MydataPage);
  }
  //跳转到设置
  toSetting() {
    this.navCtrl.push(SettingPage);
  }

}
