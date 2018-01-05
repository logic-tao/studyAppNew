import {Component, Inject} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http,Response} from "@angular/http";
import {HomeworkTestPage} from "./homework-test";

/**
 * Generated class for the HomeworkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homework',
  templateUrl: 'homework.html',
})
export class HomeworkPage {

  // 接收数据
  listData: Object;
  // 课程
  subject: string ="2";
  subjectindexData:any=[]
  user: string = localStorage.getItem("user");

  constructor(@Inject('appService') private appService,
              public navCtrl: NavController, public navParams: NavParams, private  http: Http,public app:App) {
    this.subjectindex()
  }

  subjectindex(){
    this.appService.subjectindex().then(
      res => {
        if(res.code==200){
          this.subjectindexData=res.content
          console.log(this.subjectindexData)
        }

      },
      error=>{
        // alert('错误')
        console.log(error)
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworkPage');
    console.log()
    this.http.request('http://101.201.238.157/index/request_homework_list/'+ this.user+"/"+this.subject)
      .subscribe((res: Response) => {
        this.listData = res.json();
        console.log(this.listData)
      });
  }

  //请求不同科目的知识点
  segmentChanged() {
    this.http.request('http://101.201.238.157/index/request_homework_list/'+ this.user+"/"+this.subject)
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }

  tohomework(hid,name){
    this.app.getRootNav().push('HomeworkTestPage',{"hid":hid,"subject":name});
  }


}
