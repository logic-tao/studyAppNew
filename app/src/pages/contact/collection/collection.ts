import {Component, Inject} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {CollectionListPage} from "./collection-list";
import {Response,Http} from "@angular/http";


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
  shoucang: any = 0;
  subjectindexData:any=[]

  constructor(@Inject('appService') private appService,public navCtrl: NavController, public navParams: NavParams,public app:App,public http: Http) {
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
    console.log('ionViewDidLoad collectionPage');
    this.http.request('http://47.100.203.126:81/index.php/index/sj_function1/' + this.user)
      .subscribe((res: Response) => {
        for(var i = 0; i < this.subjectindexData.length; i++){
          if(res.json()[this.subjectindexData[i].id]!= undefined) {
            this.shoucang += res.json()[this.subjectindexData[i].id]
            this.subjectindexData[i].shoucang = res.json()[this.subjectindexData[i].id]
          }else {
            this.subjectindexData[i].shoucang = 0
          }

        }
        console.log(this.subjectindexData)

      });
  }

  toCollectionDetail(kid) {
    this.app.getRootNav().push('CollectionListPage',{"kid":kid});
  }
}
