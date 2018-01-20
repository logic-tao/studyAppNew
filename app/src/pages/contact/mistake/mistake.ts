import {Component, Inject} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
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
  user: string = localStorage.getItem("user");
  //接收数据
  data:any;
  //错题数
  cuoti:any =0
  subjectindexData:any=[]


  constructor(@Inject('appService') private appService,public navCtrl: NavController, public navParams: NavParams,public http: Http,public app:App) {
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
    console.log('ionViewDidLoad MistakePage');

    this.http.request('httP://222.73.69.146:8088/index/request_wrong_count/' + this.user)
      .subscribe((res: Response) => {
        for(var i = 0; i < this.subjectindexData.length; i++){
          if(res.json()[this.subjectindexData[i].id]!= undefined) {
            this.cuoti += res.json()[this.subjectindexData[i].id]
            this.subjectindexData[i].cuoti = res.json()[this.subjectindexData[i].id]
          }else {
            this.subjectindexData[i].cuoti = 0
          }

        }
        console.log(this.subjectindexData)

      });
  }

  toMistakeDetail(id) {
    this.app.getRootNav().push('MistakeListPage',{
      id:id
    });
  }
}


