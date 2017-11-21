import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// import {FileChooser, FilePath, Camera, Transfer} from "ionic-native";
import {Http,Response} from "@angular/http";

/**
 * Generated class for the PersonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  [x: string]: any;
  loadingCtrl: any;

  //图片路径
  imageURL:string;
  //照片路径
  photoUrl:string;

  //接收数据
  listData: Object;
  //登录用户ID
  login_id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,
              public actionSheetCtrl: ActionSheetController,private  http: Http) {
    this.login_id = '1111';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad  PersonPage');
    this.http.request('httP://101.201.238.157/index/request1/' + this.login_id)
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }


  //更改昵称
  changeNick() {
    let prompt = this.alertCtrl.create({
      title: '更改昵称',
      inputs: [
        {
          name:'nick',
          placeholder: 'Nickname'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (data.nick == "") {
              let alert = this.alertCtrl.create({
                subTitle: '昵称不能为空!',
                buttons: ['OK']
              });
              alert.present();
              //alert("昵称不能为空!");
            }else {
              this.nickname = data.nick;
            }
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  //更换头像
  changeAvatar() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '修改头像',
      buttons: [
        {
          text: '拍照上传',
          role: 'takePhoto',
          handler: () => {
            console.log('takePhoto');
            this.getPhoto();
          }
        },
        {
          text: '相册上传',
          handler: () => {
            console.log('Album');
            this.takePhoto();
          }
        },
      ]
    });

    actionSheet.present();
  }

  //读取相册文件夹

  getPhoto(){
    // FileChooser.open()
    //   .then(uri =>{
    //       FilePath.resolveNativePath(uri)
    //         .then(filePath => {
    //           this.imageURL = filePath;
    //           this.photoUrl = filePath;
    //           this.upload(this.imageURL)
    //         });
    //     }
    //   )
    //   .catch(e => console.log(e));
  }


  //拍照
  takePhoto() {
    // Camera.getPicture().then((imageData) => {
    //   this.imageURL = imageData;
    //   this.photoUrl = imageData;
    //   this.upload(this.imageURL)
    // }, (err) => {
    //   console.log(err);
    // });
  }
  //上传
  upload(imgUrl :any){
    // let loader = this.loadingCtrl.create({
    //   content: "正在上传头像...",
    // });
    // loader.present();
    //   var ft = new Transfer();
    //   var options = {
    //     fileKey: 'file',
    //     fileName: this.phone+'_head.jpg',
    //     params:{operatiune:'uploadpoza'}
    //   }
    //   ft.upload(imgUrl,encodeURI(this.config.server +"/uploadFile/upload"),options)
    //     .then((data) => {
    //       if(data.response){
    //         var response=JSON.parse(data.response)
    //         if(response.rtn){
    //           loader.dismiss();
    //           alert("头像设置完成");
    //         }else{
    //           loader.dismiss();
    //           alert("头像设置失败，请重新登录");
    //         }
    //       }else{
    //         loader.dismiss();
    //         alert("头像设置失败，请重新登录");
    //       }
    //       var rtnString=JSON.stringify(data);


    //     }, (err) => {
    //       loader.dismiss();
    //       alert("头像设置失败，请重新登录");
    //     })
    }

}
