import { Component,ViewChild,ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController} from 'ionic-angular';
import { Http, Response } from '@angular/http';
// import {PagedetailPage} from  '../pagedetail/pagedetail'
import { MyApp} from '../../app/app.component';
import {Camera,CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
// import {ExerciseDetailPage} from "../contact/exercise/exercise-detail";
// import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the PageexamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare let Swiper:any;
declare let navigator:any;
@IonicPage()
@Component({
  selector: 'page-pageexam',
  templateUrl: 'pageexam.html',
})
export class PageexamPage {
  @ViewChild('ionSlides') slides;
  // @ViewChild(Slides) slides: Slides;
  listDetailData : any=[];
mySwiper:any
timer:any
alltrimebgin:number=180
alltrime:number=180
datestr:any='555'
m:number
s:number
selectNum:any
yiwanc:any
weiwanc:any
zehgnque:any
qita:any
cuowu:any
weiwancsty:any
zehgnquesty:any
qitasty:any
cuowusty:any
userendtime:any
daantanchuang:boolean=false
currentIndex:any=0
base64Image:any
latenum:any=0
voidlis:any=[]
  add(){
    //将题添加到后台数ll据库中 sfds
    // alert("收藏成功");
    this.http.request('http://101.201.238.157/index/collect?'
    +'&uid='+this.appComponent.userinfo.id
    +'&kid='+'1'
    +'&titleId='+this.listDetailData[this.currentIndex].titleId
  ).subscribe((res: Response) => {
      
      this.appComponent.presentToast('收藏成功!'); 
              console.log(res);
            });
    // this.http.request('http://sapi.bainid.com/demo/index/collect').subscribe();

  }
  palay(i){
    this.appComponent.presentToast(this.voidlis[i].localURL); 
    }
  geiviod(){
    // let options: CaptureImageOptions = { limit: 3 };
    // this.mediaCapture.captureImage(options)
    //   .then(
    //     (data: MediaFile[]) => console.log(data),
    //     (err: CaptureError) => console.error(err)
    //   );
      // capture callback
var captureSuccess = function(mediaFiles) {
  console.log('mediaFiles')
  console.log(mediaFiles)
  var i, path, len;
  this.voidlis=mediaFiles;
  for (i = 0, len = mediaFiles.length; i < len; i += 1) {
      path = mediaFiles[i].fullPath;
      // do something interesting with the file
  }
};

// capture error callback
var captureError = function(error) {
  navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// start audio capture
navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
  }
  voidint(){
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.device.capture);
    }
  }
  getimg(){
    let actionSheet = this.actionSheetCtrl.create({
      title: '图片上传',
      buttons: [
        {
          text: '拍照上传',
          role: 'takePhoto',
          handler: () => {
            console.log('takePhoto');
            this.getPicture()
            // this.getPhoto();
          }
        },
        {
          text: '相册上传',
          handler: () => {
            console.log('Album');
            this.getPictures()
            // this.takePhoto();
          }
        },
      ]
    });

    actionSheet.present();
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
  getPicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      // destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
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
    ngOnDestroy(){
  if(this.timer){
  clearInterval(this.timer);
  }
}
  countviodtime(){
    this.timer = setInterval(()=>{
      if(this.timer&&this.listDetailData.length==0){
        clearInterval(this.timer);
        }
      console.log(this.listDetailData)
      if(this.alltrime>0){
        this.alltrime-=1
      }else{
        this.tijiaoSubject()
      }
this.m=Math.floor(this.alltrime/60)
this.s=this.alltrime%60
    },1000)
  }
  // 返回上一题
  beforeSubject(){
    // this.navCtrl.pop(PagedetailPage);
  }
  ionSlideDidChange(){
     this.currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', this.currentIndex);
    // slideNext(speed, runCallbacks)
    // slidePrev(speed, runCallbacks)
    //this.slides.slideTo(index, speed, runCallbacks)
  }
  // 返回下一题
  shangSubject(){
    this.slides.slidePrev()
  }
  nextSubject(i){
    if(this.listDetailData[i].useranswer===''){
  this.appComponent.presentToast('请输入答案!'); 
    }else{
      this.cunchushuj(i)
    // this.listDetailData[i].showanswer=true
    this.slides.slideNext()
    }

   // this.navCtrl.push(Pageexam01Page);
  }
  cunchushuj(i){
    // https://www.kancloud.cn/zsb38252/subject/423944
    this.http.request('http://101.201.238.157/index.php/demo/index/text_message_log?'
    +'type='+this.listDetailData[i].type
    +'&tid='+this.listDetailData[i].titleId
    +'&uid='+this.appComponent.userinfo.id
    +'&state='+this.navParams.data.type
    +'&answer='+this.listDetailData[i].useranswer
    +'&score='+0
    )
      .subscribe((res: Response) => {

        console.log('存储成功');
        console.log(res);
      });
  }
  selectclick(i,answer?:any){

    this.listDetailData[i].useranswer=answer

    if(
      this.navParams.data.type==1//1专题练习 2试卷
    ){
      this.listDetailData[i].showanswer=true
    }
    if(this.listDetailData[i].answer==answer){
      this.listDetailData[i].jieguo=2
    }else{
      this.listDetailData[i].jieguo=3
    }
  }
//public camera: Camera,
  constructor(private mediaCapture: MediaCapture,private imagePicker: ImagePicker,private transfer: FileTransfer, private file: File,public camera: Camera,public actionSheetCtrl: ActionSheetController,public cd: ChangeDetectorRef,public appComponent:MyApp,public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
  this.voidint()
}


getPhoto(){

}
takePhoto(){

}

  tiankong(i){
    if(this.listDetailData[i].useranswer==''){
      this.listDetailData[i].jieguo=0
    }else{
      this.listDetailData[i].jieguo=1
    }
  }
  jieda(i){
    if(this.listDetailData[i].useranswer==''){
      this.listDetailData[i].jieguo=0
    }else{
      this.listDetailData[i].jieguo=1
    }
  }
getpagedata(id){
  this.datestr=new Date().toLocaleDateString()
//       this.http.request('httP://101.201.238.157/index/requestMess')
//       .subscribe((res: Response) => {
//         this.m=Math.floor(this.alltrime/60)
// this.s=this.alltrime%60
//         this.countviodtime()
//         console.log('getpagedata')
//         this.listDetailData = res.json();
//         console.log(this.listDetailData)
//         for (var i = 0; i < this.listDetailData.length; i++) {
//           this.listDetailData[i].showanswer=false
//           this.listDetailData[i].useranswer=''
//           this.listDetailData[i].jieguo=0//0 未解答 1已解答 2 正确 3 错误 
//         }
//       });
            this.http.request('http://101.201.238.157/index.php/demo/index/getDpecialList?id='+id)
            .subscribe((res: Response) => {
                      this.m=Math.floor(this.alltrime/60)
                      this.s=this.alltrime%60;
                      console.log(res)
                      this.countviodtime()
                      this.listDetailData = res.json();
                      this.latenum=this.listDetailData.length-1
                      console.log(this.listDetailData)
                      for (var i = 0; i < this.listDetailData.length; i++) {
                        this.listDetailData[i].showanswer=false
                        this.listDetailData[i].useranswer=''
                        this.listDetailData[i].jieguo=0//0 未解答 1已解答 2 正确 3 错误 
                      }

                       this.cd.detectChanges();//刷新数据
            });
}
getpagetextdata(id){
      this.http.request('http://101.201.238.157/index.php/demo/index/getDpecialList?id='+id)
      .subscribe((res: Response) => {
        this.listDetailData = res.json();
        this.latenum=this.listDetailData.length-1
        for (var i = 0; i < this.listDetailData.length; i++) {
          this.listDetailData[i].showanswer=false
          this.listDetailData[i].useranswer=''
          this.listDetailData[i].jieguo=0//0 未解答 1已解答 2 正确 3 错误 
        }
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

    fileTransfer.upload(fileurl, encodeURI('http://101.201.238.157/index.php/demo/index/uploadFile'), options)
    .then((data) => {
      // success
      console.log('success')
      // var dss  =  data.json();
      data.response=JSON.parse(data.response)
      console.log(data)
      if(data.response['code']=200){
        this.base64Image = data.response['data']['img_url'];
        console.log('base64Image:'+this.base64Image)
        this.cd.detectChanges();
      }
    }, (err) => {
      console.log('err')
      console.log(err)
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PagenextPage');
    console.log(this.navParams.data)
    if(this.navParams.data.type==1){ //1专题练习 2试卷
      this.getpagetextdata(this.navParams.data.id)
    }else{
      this.getpagedata(this.navParams.data.id)
    }
      //     this.http.request('http://sapi.bainid.com/index/requestMess')
      // .subscribe((res: Response) => {
      //   this.listDetailData = res.json();
      // });
  }
  tijiaoSubject(){
    this.yiwanc=0
    this.weiwanc=0
        this.zehgnque=0
    this.cuowu=0
    this.qita=0
//     yiwanc:any
// weiwanc:any
            for (var i = 0; i < this.listDetailData.length; i++) {
              if(this.listDetailData[i].useranswer==''){
                this.weiwanc=this.weiwanc+1
              }else{
                this.yiwanc=this.yiwanc+1
                  if(this.listDetailData[i].type==1||this.listDetailData[i].type==3){
                    if(this.listDetailData[i].useranswer==this.listDetailData[i].answer){
                      this.zehgnque=this.zehgnque+1
                    }else{
                      this.cuowu=this.cuowu+1
                    }
                  }else{
                    this.qita=this.qita+1
                    this.listDetailData[i].jieguo=4
                  }
              }
        }
        this.weiwancsty=this.widthstyl(this.weiwanc)
this.zehgnquesty=this.widthstyl(this.zehgnque)
this.qitasty=this.widthstyl(this.qita)
this.cuowusty=this.widthstyl(this.cuowu)
    this.daantanchuang=true
    clearInterval(this.timer);
let sengyutime =this.alltrimebgin-this.alltrime
    let m=Math.floor(sengyutime/60)
let s=sengyutime%60
this.userendtime='0'+m+":"+s
  }
  widthstyl(num){
    let sty ={width:Math.round(num/this.listDetailData.length*100)+'%'}
    return sty
  }
  tozuotijieshi(j){
    this.slides.slideTo(j)
    this.daantanchuang=false
    this.listDetailData[j].showanswer=true
  }

}
