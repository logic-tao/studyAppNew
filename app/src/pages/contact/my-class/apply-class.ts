import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http,Response} from "@angular/http";

/**
 * Generated class for the ApplyClassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-class',
  templateUrl: 'apply-class.html',
})
export class ApplyClassPage {

  listData:Object;
  login_id;
  ban:number;


  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http,public alertCtrl: AlertController) {
  this.login_id = localStorage.getItem("user");
  console.log(this.login_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyClassPage');

  }

  join() {
    this.http.request('http://47.100.203.126:81/index.php/index/request66/' + this.login_id + '/' + this.ban)
      .subscribe((res: Response) => {
        this.listData = res.json();

        if (this.listData != null && this.listData == "1") {
          let alert = this.alertCtrl.create({
            subTitle: '课程添加成功,等待审核',
            buttons: ['OK']
          });
          alert.present();
          //alert("昵称不能为空!");
        } else if (this.listData != null && this.listData == "0") {
          let alert = this.alertCtrl.create({
            subTitle: '添加失败',
            buttons: ['OK']
          });
          alert.present();
        } else if (this.listData != null && this.listData == "2") {
          let alert = this.alertCtrl.create({
            subTitle: '添加失败,没有这个班级编号!',
            buttons: ['OK']
          });
          alert.present();
        }
        console.log(this.listData);

      });

  }

}
