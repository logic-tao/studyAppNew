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
        console.log('indexguide')
        console.log(res)
        this.serveData=res.content
        
                            for (var i = 0; i < this.serveData.length; i++) {
            this.serveData[i].icon=BASEURLIMG+this.serveData[i].icon
          }
      },
      error=>{
        // alert('错误')
        console.log(error)
      })
  }
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
