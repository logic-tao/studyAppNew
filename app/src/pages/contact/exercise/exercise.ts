import {Component, Inject} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http,Response} from "@angular/http";
import {ExerciseDetailPage} from "./exercise-detail";
import {FormControl} from "@angular/forms";
import {MyApp} from "../../../app/app.component";

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
  listD1:any = [];
  listD2:any = [];
  // 课程
  subject: string ="2";
  subjectindexData:any=[]
  // 用户
  user: string = localStorage.getItem("user");

  private  titleFilter:FormControl = new  FormControl();
  private  keyword:string;
  type : string;

  constructor(@Inject('appService') private appService,public appComponent:MyApp,public app: App,public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
      this.subjectindex()
        // this.titleFilter.valueChanges
        // .debounceTime(500)
        // .subscribe(value=>this.keyword=value);
        // this.type = this.subject;
        //this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');
    let part = this;
    //进入页面请求知识点
    this.http.request("http://101.201.238.157/index/request_record_list/"+this.user+"/" + this.subject)
      .subscribe((res: Response) => {
        this.listData = res.json();
        this.listData.forEach(function (e) {
          if(e.type == '1'){
            part.listD1.push(e);
          }else if (e.type =='2'){
            part.listD2.push(e);
          }
        });
        console.log(this.listD1)
      });

  }

  segmentChanged() {
    //console.log(event.value);
    let part = this;
    this.http.request("http://101.201.238.157/index/request_record_list/"+this.user+"/" + this.subject)
      .subscribe((res: Response) => {
        this.listData = res.json();
        this.listData.forEach(function (e) {
          if(e.type == '1'){
            part.listD1.push(e);
          }else if (e.type =='2'){
            part.listD2.push(e);
          }
        });
      });
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
  // changeVersion(){
  //   console.log(this.subject)
  //   this.Selected(this.subject)
  // }



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
