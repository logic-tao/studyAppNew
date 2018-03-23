import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
declare var window: any;
@IonicPage()
@Component({
  selector: 'page-watch-live',
  templateUrl: 'watch-live.html',
})
export class WatchLivePage {
  url: string = 'rtmp://live.hkstv.hk.lxdns.com/live/hks';
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private modal: ModalController
    ) {
  }


  ionViewDidLoad() {
    console.log(window);
    console.log(window.CLiteAV);
  }
  // 跳转播放
  goToPlayerPage() {
    window.CLiteAV.startPlay(
      'http://1234.liveplay.myqcloud.com/live/1234_Room47.flv',
      window.CLiteAV.PLAY_URL_TYPE.PLAY_TYPE_LIVE_FLV,
      function (msgSuccess) {
          // ...
      },
      function (msgError) {
          // ...
      },
  )
  }
}
