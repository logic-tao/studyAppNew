import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MistakeListPage} from "./mistake-list";
import {Http,Response} from "@angular/http";

/**
 * Generated class for the MistakePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mistake',
  templateUrl: 'mistake.html',
})
export class MistakePage {
  //用户id
  login_id:string = '1111';
  //接收数据
  yuNum:object;
  shuNum:object;
  yingNum:object;

  private subjects: Subject[] = [
    new Subject(1,"语文",8),
    new Subject(2,"数学",4),
    new Subject(3,"英语",6),

  ];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MistakePage');

    this.http.request('httP://101.201.238.157/index/request4/' + this.login_id + '/' +'1')
      .subscribe((res: Response) => {
        this.yuNum = res.json();
      });
    this.http.request('httP://101.201.238.157/index/request4/' + this.login_id + '/' +'2')
      .subscribe((res: Response) => {
        this.shuNum = res.json();
      });
    this.http.request('httP://101.201.238.157/index/request4/' + this.login_id + '/' +'3')
      .subscribe((res: Response) => {
        this.yingNum = res.json();
      });
  }

  toMistakeDetail(id:number) {
    this.navCtrl.push(MistakeListPage,{
      id:id
    });
  }
}

export class Subject {

  constructor(public subjectID: number,
              public name: string,
              public wrongNumber: number,
              )
     {
  }
}
