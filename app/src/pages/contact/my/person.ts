import {Component, Input} from '@angular/core';
import {ActionSheetController, App, IonicPage, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Camera,CameraOptions } from '@ionic-native/camera';
import {Http,Response} from "@angular/http";
import { ImagePicker } from '@ionic-native/image-picker';
import { FileTransfer,FileTransferObject, FileUploadOptions} from "@ionic-native/file-transfer";
import {PersonModifyPage} from "./person-modify";

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
  user: string = localStorage.getItem("user");
  gender:string = "男";
  age:any;
  name:string = '';
  school: string = "";
  birthday: string ='';
  nickname:string ='';
  email:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,
              public actionSheetCtrl: ActionSheetController,private  http: Http,public app:App,private imagePicker: ImagePicker,private transfer: FileTransfer, private file: File,public camera: Camera) {
    this.login_id = '1111';
  }

  @Input() src: string = "http://placehold.it/80x80/"
  ionViewDidLoad() {
    console.log('ionViewDidLoad  PersonPage');
    this.http.request('httP://101.201.238.157/index/request1/' + this.user)
      .subscribe((res: Response) => {
        this.listData = res.json();
        if (this.listData != null) {
          if (this.listData[0]['avatar']!=undefined&&this.listData[0].avatar != "") {
            this.src = res.json()[0].avatar;
          }
          if (res.json()[0]['name']!=undefined) {
            this.name = res.json()[0].name;
          }
          if (res.json()[0]['school']!=undefined) {
            this.school = res.json()[0].school;
          }
          if (res.json()[0]['birthday']!=undefined) {
            this.birthday = res.json()[0].birthday;
            var date = new Date();
            var year = date.getFullYear();
            this.age = year - parseInt(this.birthday.substring(0, 4));
            if (res.json()[0]['email']!=undefined) {
              this.email = res.json()[0].email;
            }
            if (res.json()[0]['nickname']!=undefined) {
              this.nickname = res.json()[0].nickname;
            }
            if (res.json()[0]['gender']!=undefined) {
              if (res.json()[0].gender == 2) {
                this.gender = "女"
              }
            }
          }
          console.log(this.listData)
        }
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
      title: '图片上传',
      buttons: [
        {
          text: '拍照上传',
          role: 'takePhoto',
          handler: () => {
            console.log('takePhoto');
            this.paizhao()
            // this.getPhoto();
          }
        },
        {
          text: '相册上传',
          handler: () => {
            this.getPictures();
            console.log('Album');
            // this.takePhoto();
          }
        },
      ]
    });

    actionSheet.present();

    //读取相册文件夹

  }
  getPictures(){
    let options={maximumImagesCount:1,number:0}
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        this.upload(results[i])
      }
    }, (err) => { });
  }

  paizhao(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      // destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit:true

    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      console.log('getPicture')
      console.log(imageData)
      this.upload(imageData)
      //  this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  upload(fileurl) {
    console.log('upload:'+fileurl)
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'upload',
      fileName: 'name.jpg',
      headers: {}
    }

    fileTransfer.upload(fileurl, encodeURI('http://101.201.238.157/index.php/demo/index/uploadavatar/' + this.user), options)
      .then((data) => {
        // success
        console.log('success')
        console.log(data)
      }, (err) => {
        console.log('err')
        console.log(err)
      })
  }

  toModify() {
    this.app.getRootNav().push('PersonModifyPage');
  }

}
