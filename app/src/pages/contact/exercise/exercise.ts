import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http,Response} from "@angular/http";
import {ExerciseDetailPage} from "./exercise-detail";

/**
 * Generated class for the ExercisePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {

  // 接收数据
  listData: any;
  // 课程
  subject: string ="1";
  // 用户
  user: string = localStorage.getItem("user");

  constructor(public navCtrl: NavController, public navParams: NavParams,private  http: Http,
              public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');

    //进入页面请求知识点
    this.http.request("http://101.201.238.157/index/request_record_list/"+this.user+"/" + this.subject)
      .subscribe((res: Response) => {
        this.listData = res.json();
      });

  }



  // itemSelected(item){
  //   this.navCtrl.push(ExerciseDetailPage,{subject:item});
  // }

  //请求不同科目的知识点
  segmentChanged() {
    //console.log(event.value);
    this.http.request("http://101.201.238.157/index/request_record_list/"+this.user+"/" + this.subject)
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }



  itemSelectedchild(event,j,itemch){
    event.stopPropagation();
    //this.app.getRootNav().push('PageexamPage',{type:0,id:1});
    this.app.getRootNav().push('ExerciseDetailPage',{subject:itemch,cid:itemch.id});
    console.log(j)
  }

  itemSelected(j,item){
    console.log(this.listData[j])
    if(this.listData[j].sub_knowledege.length==0){
      //this.app.getRootNav().push('PageexamPage',{type:0,id:this.listData[j].id});
      this.app.getRootNav().push('ExerciseDetailPage',{subject:item,cid:item.id});
    }else{
      for (var i = 0; i < this.listData.length; i++) {
        if(i==j){
          if(this.listData[i].open){this.listData[i].open=false}else{this.listData[i].open=true}
        }else{
          this.listData[i].open=false
        }
      }
    }

    // alert(i)
    // this.navCtrl.push(PagedetailPage,{subject:item});

  }


  // Selected(subject){
  //   this.subjectNum = subject;
  //   this.http.request('http://101.201.238.157/index.php/demo/index/examList?cid='+this.subjectNum+'&type=1')
  //     .subscribe((res: Response) => {
  //
  //       console.log(res.url);
  //       //console.log(res.json().data);
  //       this.listData = res.json();
  //       for (var i = 0; i < this.listData.length; i++) {
  //         this.listData[i].open=false
  //         this.listData[i].arr=[3,4,5]
  //       }
  //     });
  //
  //
  // }



}
