import { Component ,Inject} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Response, Http } from "@angular/http";
@IonicPage()
@Component({
  selector: 'page-ondemand',
  templateUrl: 'ondemand.html',
})
export class OndemandPage {
  // 科目
  public subjectindexData: any = []
  public subject: string = "1";
  public subjectNum: string = "1";
  public subjectPage:string = "20";
  public subjectstitle: string;
  public listData:any;
  public dataSet=[];
  constructor(
    @Inject('appService') private appService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
   
  ) {
    
  }
ngOnInit() {
  this.subjectindex();
}

  //顶部科目下拉列表
  subjectindex() {
    this.appService.subjectindex().then(res => {
    if (res.code == 200) {
        this.subjectindexData = res.content
        this.subjectstitle = this.subjectindexData[0].subject_name;
        this.liveList(this.subjectindexData[0].id);
      }
    })
  }

  //切换科目时
  changeVersion(){
    for(var j = 0; j < this.subjectindexData.length; ++j){
      if(this.subjectindexData[j].id==this.subject){
        this.subjectstitle=this.subjectindexData[j].subject_name;
      }
    }
    // console.log(this.subject)
    this.liveList(this.subject);
  }

  //直播课程列表
  liveList(subjectId){
    const data={
      lid:subjectId,
      page:this.subjectPage,
      num:this.subjectNum
    }
    this.http.post(`http://101.132.70.102/api/index.php/live/index`,JSON.stringify(data))
    .subscribe((res: Response) => {
      this.listData =res.json();
      this.dataSet = this.listData.content.lessions;
      console.log(this.dataSet )
    })
  }


}
