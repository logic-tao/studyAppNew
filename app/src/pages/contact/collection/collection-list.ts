import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http,Response} from "@angular/http";
import {PagedetailPage} from "../../pagedetail/pagedetail";

/**
 * Generated class for the MistakeListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection-list',
  templateUrl: 'collection-list.html',
})
export class CollectionListPage {
// 接收数据
  listData: Object;
  // 科目
  subject: string ="1";

  constructor(public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionListPage');
    // 网络请求
    //http://js onplaceholder.typicode.com/photos


    this.http.request('http://101.201.238.157')
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }

  itemSelected(item){
    this.navCtrl.push(PagedetailPage);
  }


}

