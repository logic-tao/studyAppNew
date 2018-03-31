import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController,NavParams } from 'ionic-angular';
import { Response, Http } from "@angular/http";
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
	url: string = 'rtmp://live.hkstv.hk.lxdns.com/live/hks';
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private modal: ModalController,
     public http: Http,
    ) {
     
  }

  ngOnInit() {
    this.liveDetail()
  }
  //直播课程列表
  liveDetail(){
    const data={
     id:this.navParams.data.id
    }
    this.http.post(`http://101.132.70.102/api/index.php/live/detail`,JSON.stringify(data))
    .subscribe((res: Response) => {
      console.log(res )
    })
  }

}
