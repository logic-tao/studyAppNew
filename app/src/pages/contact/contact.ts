import {Component, Input} from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {PersonPage} from "./my/person";
import {ExercisePage} from "./exercise/exercise";
import {MistakePage} from "./mistake/mistake";
import {HomeworkPage} from "./homework/homework";
import {CollectionPage} from "./collection/collection";
import {MyclassPage} from "./my-class/my-class";
import {MydataPage} from "./mydata/mydata";
import {Http,Response} from "@angular/http";
import {SettingPage} from "./setting/setting";
import {VideorecordPage} from "./videos/videorecord";
import {MyApp} from "../../app/app.component";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  //用户
  name :string='';
  //listData
  listData : Object;
  school:string='';

  user:string = localStorage.getItem("user");
  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http,public appComponent:MyApp,public app:App) {
    //this.login_id = localStorage.getItem("Login_id");

    //存储登录用户id
    localStorage.setItem("user",this.appComponent.userinfo.id);
    this.name = this.appComponent.userinfo.realname;
  }

  @Input() src: string = "http://placehold.it/80x80/"

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.http.request('httP://101.201.238.157/index/request1/' + this.user)
      .subscribe((res: Response) => {
        this.listData = res.json();

        if (this.listData != null) {
          if (this.listData[0]['avatar']!=undefined&&this.listData[0].avatar != "") {
            this.src = res.json()[0].avatar;
          }
          if (res.json()[0]['name']!=undefined) {
            this.name = res.json()[0].name;
          }
          if (res.json()[0]['school']!=undefined) {
            this.school = res.json()[0].school;
          }
        }
        console.log(this.listData)
      });
  }
  ionViewWillLeave() {
    console.log('ionViewDidLoad RegisterPage');
    this.http.request('httP://101.201.238.157/index/request1/' + this.user)
      .subscribe((res: Response) => {
        this.listData = res.json();
        if (this.listData != null) {
          if (this.listData[0]['avatar']!=undefined&&this.listData[0].avatar != "") {
            this.src = res.json()[0].avatar;
          }
          if (res.json()[0]['name']!=undefined) {
            this.name = res.json()[0].name;
          }
          if (res.json()[0]['school']!=undefined) {
            this.school = res.json()[0].school;
          }
        }
      });
  }

  //跳转到我
  toPerson() {
    this.app.getRootNav().push('PersonPage');
  }
  //跳转到练习记录
  toExercise() {
    this.app.getRootNav().push('ExercisePage');
  }
  //跳转到错题本
  toMistake() {
    this.app.getRootNav().push('MistakePage');
  }
  //跳转到我的作业
  toHomeWork() {
    this.app.getRootNav().push('HomeworkPage');
  }
  //跳转我的精讲
  toVideos() {
    this.app.getRootNav().push('VideorecordPage');
  }
  //跳转我的收藏
  toMycollection() {
    this.app.getRootNav().push('CollectionPage');
  }
  //跳转到我的班级
  toMyclass() {
    this.app.getRootNav().push('MyclassPage');
  }
  //跳转我的资料
  todata() {
    this.app.getRootNav().push('MydataPage');
  }
  //跳转到设置
  toSetting() {
    this.app.getRootNav().push('SettingPage');
  }

}
