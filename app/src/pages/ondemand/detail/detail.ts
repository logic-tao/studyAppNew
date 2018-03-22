import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController,NavParams } from 'ionic-angular';

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
     private modal: ModalController
    ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OndemandPage');
  }
  // 跳转播放
  // goToPlayerPage() {
  //   let modal = this.modal.create('player', {
  //     url: this.url
  //   });
  //   modal.present();
  // }
}
