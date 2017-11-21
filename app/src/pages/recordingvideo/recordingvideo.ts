import { Component,Inject} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BASEURLIMG} from '../../theme/theme.config';
import { MyApp} from '../../app/app.component';
/**
 * Generated cla6666ss 666for the RecordingvideoPage page.
 *
 * See http://ion444icfr4444a44444555544mework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recordingvideo',
  templateUrl: 'recordingvideo.html',
})
export class RecordingvideoPage {
//  segmentsArray = ['segmentOne','segmentTwo','segmentThree'];
  segmentModel: any=0;
  gender:any
  selecNUM:any=0;
  selecChiarnum:any=0
  topData:any;
  selectnum:number=0
  vidoaarrData:any={}
  charidARR:any=[]
  selectOptions = {
  title: 'Pizza Toppings',
  subTitle: 'Select your toppings',
  mode: 'md'
};
  constructor(public appComponent:MyApp,@Inject('appService') private appService,public navCtrl: NavController, public navParams: NavParams) {
    this.getpageData()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordingvideoPage');
  }
  toOperationPage(num){
    this.navCtrl.push('OperationPage',{num:num})
  }
//   compareFn(e1: Employee, e2: Employee): boolean {
//   return e1 && e2 ? e1.id === e2.id : e1 === e2;
// }
  tapelessionindex(){//录播课视频列表
    // sid	是	string	科目id，默认是1
    // num	是	integer	数量
    // page	否 integer	第几页,默认是1
    let servedata={sid:this.segmentModel}
    this.appService.tapelessionindex(servedata).then(
      res => {
        if(res.code==200){
          this.vidoaarrData.knowledege=res.content.knowledege
          this.onSelectChange(0)
          //           for (var i = 0; i < this.vidoaarrData.knowledege.length; i++) {
          //   console.log(this.vidoaarrData.knowledege[i]);
          // }
          // for (var i = 0; i < this.vidoaarrData.lessions.length; i++) {
          //   this.vidoaarrData.lessions[i].icon=BASEURLIMG+this.vidoaarrData.lessions[i].icon
          // }
          
        }
        console.log(res)

      },
      error=>{
        // alert('错误')
        console.log(error)
      }
  )
}
  tapelessionindexsid(sid){//录播课视频列表
  // this.vidoaarrData.lessions=[]
    let servedata={sid:this.segmentModel,kid:sid,page:1,num:10}
    this.appService.tapelessionindex(servedata).then(
      res => {
        if(res.code==200){
          console.log('============');
          this.vidoaarrData.lessions=res.content.lessions
                    for (var i = 0; i < this.vidoaarrData.lessions.length; i++) {
            this.vidoaarrData.lessions[i].icon=BASEURLIMG+this.vidoaarrData.lessions[i].icon
          }
        }else{
          this.appComponent.presentToast(res.message);
        }
        console.log(res)

      },
      error=>{
        this.appComponent.presentToast(error);
        // alert('错误')
        console.log(error)
      }
  )
  }
  swipeEvent(event){
//   //向左滑
// if(event.direction==2){
//   if(this.segmentsArray.indexOf(this.segmentModel)<2){
// this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel)+1];
//   }
// }
// //向右滑
// if(event.direction==4){
//   if(this.segmentsArray.indexOf(this.segmentModel)>0){
// this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel)-1];
//   }
// }

}
selecttab(i){
this.selectnum=i
this.segmentModel=this.topData[i].id
this.tapelessionindex()
}
getpageData(){
          this.appService.subjectindex().then(
            res => {
                        
              if(res.code==200){
                this.topData=res.content
                console.log('=====topData=======')
                console.log(this.topData)
                console.log(this.selectnum)
                console.log(this.topData[this.selectnum])
                this.segmentModel=this.topData[0].id
                this.tapelessionindex()
              }
              
            },
            error=>{
              // alert('错误')
              console.log(error)
            }
        )
}
onSelectChange(selectedValue: any) {
    console.log('Selected', selectedValue);
    this.selecNUM=selectedValue
    console.log(this.vidoaarrData.knowledege[this.selecNUM])
    
    // this.appComponent.presentToast(this.vidoaarrData.knowledege[this.selecNUM].cname);
    this.charidARR=this.vidoaarrData.knowledege[this.selecNUM].children
    if(this.charidARR.length==0){
      this.tapelessionindexsid(this.vidoaarrData.knowledege[this.selecNUM].id)
    }else{
      this.tapelessionindexsid(this.charidARR[0].id)
    }
  }
  onSelectChangeChair(selectedValue: any) {
    console.log('Selected', selectedValue);
    this.selecChiarnum=selectedValue
    console.log(this.vidoaarrData.knowledege[this.selecNUM].children[this.selecChiarnum])
    
    // this.appComponent.presentToast(this.vidoaarrData.knowledege[this.selecNUM].children[this.selecChiarnum].cname);
    this.tapelessionindexsid(this.vidoaarrData.knowledege[this.selecNUM].children[this.selecChiarnum].id)
  }
}
