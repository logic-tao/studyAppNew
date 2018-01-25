import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApplyClassPage} from "./apply-class";
import {Http,Response} from "@angular/http";

/**
 * Generated class for the MyClassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-class',
  templateUrl: 'my-class.html',
})
export class MyclassPage {


  listData:Object;

  user:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public app:App) {
  this.user = localStorage.getItem("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyclassPage');
    this.http.request('http://222.73.69.146:8088/index.php/index/request_class/'+this.user)
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }

  add(){
    this.app.getRootNav().push('ApplyClassPage');
  }
}
export class Data {
  constructor(public ClassName: string,
              public ClassCode: number,
              public Teacher: string,
  ){

  }
}
