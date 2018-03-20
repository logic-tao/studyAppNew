import { Component,Inject} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { BASEURLIMG} from '../../theme/theme.config';
declare var cordova;
/**
 * Generated class for the ExaminationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examination',
  templateUrl: 'examination.html',
})
export class ExaminationPage {
serveData:any=[]
pagecontent:any=''
  constructor(@Inject('appService') private appService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExaminationPage');
      let servedata={}
      this.appService.indexguide(servedata).then(
      res => {

        this.serveData=res.content
        
          for (var i = 0; i < this.serveData.length; i++) {
            let oldday= new Date(parseInt(this.serveData[i].created_at))
            let nowTime = new Date();
            this.serveData[i].icon=BASEURLIMG+this.serveData[i].icon;
            this.serveData[i].created_at=this.datedifference(oldday,nowTime)
          }
          console.log('indexguide')
          console.log(this.serveData)
      },
      error=>{
        // alert('错误')
        console.log(error)
      })
  }
  datedifference(sDate1, sDate2) {    //sDate1和sDate2是2006-12-18格式
    var dateSpan,
        tempDate,
        iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays
};
  clocse(){
    this.pagecontent=''
  }
  indexindex(i){
    let url =this.serveData[i].url
    
    if(url){
      if(window['cordova']){
        cordova.InAppBrowser.open(url, '_blank', 'location=yes')
            }else{
              window.open(url, '_blank', 'location=yes');
            }
    }else{
      this.pagecontent=this.serveData[i].content
    }

  }

}
