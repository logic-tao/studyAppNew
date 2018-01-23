import { Component } from '@angular/core';
import {AlertController, App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http,Response} from "@angular/http";
import {RightDetailPage} from "./right-detail";
import {MyApp} from "../../../app/app.component";

/**
 * Generated class for the ExerciseDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html',
})
export class ExerciseDetailPage {

  //subjectID
  item: Object;

  //接收数据
  data: Object;
  //知识点id
  cid: string;
  //用户
  user: string = localStorage.getItem("user");

  //题目总数
  count: any;
  //做题时间
  t:string;
  //正确数量
  correct: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public app: App,public alertCtrl: AlertController) {
    this.item = navParams.get("subject");

    this.cid = this.navParams.get("cid");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciseDetailPage');


    this.http.request("http://222.73.69.146:8088/index.php/index/request_record_test/"+this.user+"/" + this.cid)
      .subscribe((res: Response) => {
        this.data = res.json();
        this.count = res.json().length;
        console.log(this.data);
        if (this.count > 0) {
          //获取做题时间
          this.t = this.data[0].uptime;

          //获取正确题目数
          for (var a of res.json()){
            if (a.answer == a.uanswer) {
              this.correct = this.correct + 1;
            }
          }
        }else {
          this.showAlert();
        }

      });

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: '没有数据!',
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            this.navCtrl.pop()
          }
        }]
    });
    alert.present();
  }

  itemSelected(item,id,cname) {
    this.app.getRootNav().push('RightDetailPage',{cid:item,test_number:id,cname:cname});
  }

}


