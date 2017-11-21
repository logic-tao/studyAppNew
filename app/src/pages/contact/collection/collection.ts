import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {CollectionListPage} from "./collection-list";
import {Response,Http} from "@angular/http";
import {CollectionTestPage} from "./collection-test";

/**
 * Generated class for the MycollectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {

  user:string = localStorage.getItem("user");
  //收藏题数
  yuNum:string;
  shuNum:string;
  yingNum:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad collectionPage');
    this.http.request('httP://101.201.238.157/index/sj_function1/' + this.user)
      .subscribe((res: Response) => {
        this.yuNum = res.json()["1"];
        this.shuNum = res.json()["2"];
        this.yingNum = res.json()["3"];

      });
  }

  toCollectionDetail(kid) {
    this.app.getRootNav().push(CollectionListPage,{"kid":kid});
  }
}
