import {Component, Inject, ViewChild} from '@angular/core';
import {App, IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {BASEURLIMG} from "../../../theme/theme.config";
import {MyApp} from "../../../app/app.component";

/**
 * Generated class for the VideorecordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videorecord',
  templateUrl: 'videorecord.html',
})
export class VideorecordPage {
  @ViewChild("myslide") myslides: Slides;

  //  segmentsArray = ['segmentOne','segmentTwo','segmentThree'];
  segmentModel: any;
  gender:string='f'
  subjectindexData:any=[]
  selectedIndex: number = 2;
  topData:any;
  selectnum:number=0
  vidoaarrData:any
  subject :any = 2;
  items:any
  //搜索框输入
  inpustring:any
  constructor(@Inject('appService') private appService,public app: App,public navCtrl: NavController, public navParams: NavParams,public appComponent:MyApp) {
    this.getpageData()
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
    console.log('ionViewDidLoad RecordingvideoPage');
  }
  toOperationPage(num){
    this.navCtrl.push('OperationPage',{num:num})
  }
  tapelessionindex(){//录播课视频列表
    // sid	是	string	科目id，默认是1
    // num	是	integer	数量
    // page	否 integer	第几页,默认是1
    let servedata={num:10,page:1,tokenId: this.appComponent.userinfo.tokenId}
    this.appService.myViewTaped(servedata).then(
      res => {
        if(res.code==200){
          console.log(res)
          this.vidoaarrData=res.content.records
          for (var i = 0; i < this.vidoaarrData.length; i++) {
            this.vidoaarrData[i].icon=BASEURLIMG+this.vidoaarrData[i].icon
          }
          console.log(this.vidoaarrData)

        }

        console.log(res)

      },
      error=>{
        // alert('错误')
        console.log(error)
      }
    )
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();
    this.inpustring=ev.target.value
    // this.searchlession(ev.target.value)

    // // set val to the value of the searchbar
    // let val = ev.target.value;
    // this.inpustring=val
    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.items = this.items.filter((item) => {
    //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }
  }
  search(){

    this.app.getRootNav().push('VideosPage',{inpustring:this.inpustring,sid:this.subject});
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
    let indenum=i+1
    this.myslides.slideTo(i,1);
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
  }

}
