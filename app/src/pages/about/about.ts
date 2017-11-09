import { Component ,ViewChild,Inject} from '@angular/core';
import { NavController,App,Slides} from 'ionic-angular';
import {RecordingvideoPage} from '../recordingvideo/recordingvideo';
import { BASEURL} from '../../theme/theme.config';
import { BASEURLIMG} from '../../theme/theme.config';
declare var cordova;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild('ionSlides') slides;
  urlARR:any=[
    'assets/icon/viod1.jpg',
  'assets/icon/viod2.jpg',
  'assets/icon/viod3.jpg']
  sortby:any
  items:any;
  inpustring:any=''
  pagenum:any=1
  xplainindexData:any;
  constructor(@Inject('appService') private appService,public app: App,public navCtrl: NavController) {
    this.getexplainindex()
    // this.initializeItems();
    // setTimeout(()=>{
    //   console.log('After content init');
    //   this.slides.startAutoplay()
    // },2000);
  }
  autoPlay(){
    this.slides.startAutoplay();
  }
  initializeItems() {
    // this.items = [
    //   'Amsterdam',
    //   'Bogota32',
    //   'Bogota3',
    //   'Bogota4',
    //   'Bogota5',
    // ];
  }
gousoucho(){

}
  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();
    this.inpustring=ev.target.value
    // this.searchlession(ev.target.value)

    // // set val to the value of the searchbar
    // let val = ev.target.value;
    // this.inpustring=val
    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.items = this.items.filter((item) => {
    //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }
  }
  search(){
    this.app.getRootNav().push('VideolistPage',{inpustring:this.inpustring});
  }
  tourl(url){
    if(window['cordova']){
cordova.InAppBrowser.open(url, '_blank', 'location=yes')
    }else{
      window.open(url, '_blank', 'location=yes');
    }

  }
  searchlession(str){
    let servedata={name:str}
        // sid	否	string	非必填，录播课id
    // name	是	string	录播课名称关键字
    this.appService.searchlession(servedata).then(
      res => {
        if(res.code==200){
          this.items=res.content
        }
        // alert('正确')
        console.log(res)
      },
      error=>{
        // alert('错误')
        console.log(error)
      }
  )
  }
     //页面进入时启动自动播放  
     ionViewDidEnter(){  
      console.log('ionViewDidEnter');
      // this.slides.autoplayDisableOnInteraction = false; 
      // this.slides.startAutoplay();  
         }  
        
         //页面离开时停止自动播放  
        
      ionViewDidLeave(){   
           this.slides.stopAutoplay();  
       }  
       toOperationPage(num){
        this.app.getRootNav().push('OperationPage',{num:num})
      }
//   ionViewDidEnter(){  
//     console.log('ionViewDidEnter');
//     this.slides.autoplayDisableOnInteraction = false;  
// }  
recordingViod(num){
  // this.navCtrl.push(RecordingvideoPage);
  // this.navCtrl.push('RecordingvideoPage')
  if(num==1){
    this.app.getRootNav().push('RecordingvideoPage'); 
  }
}
// ngOnInit(){//页面加载完成后自己调用

//   }
//   ionViewDidLoad(){
//     console.log('ionViewDidLoad')
//     this.slides.startAutoplay()
//   }
// ngOnChanges(changes) {
//   console.log('On changes', changes);
// }
getexplainindex(){
        this.appService.explainindex().then(
            res => {
              // alert('正确')
              console.log(res)
              this.xplainindexData=res;
              // for (var i = 0; i < this.xplainindexData.content[0].children.length; i++) {
              //   this.xplainindexData.content[0].children[i].link=BASEURL+this.xplainindexData.content[0].children[i].link
              // }
              for (var i = 0; i < this.xplainindexData.content[1].children.length; i++) {
                if(i==0){this.xplainindexData.content[1].children[i].icon='assets/icon/icon01.png'}
                if(i==1){this.xplainindexData.content[1].children[i].icon='assets/icon/icon02.png'}
                if(i==2){this.xplainindexData.content[1].children[i].icon='assets/icon/icon03.png'}
                // this.xplainindexData.content[1].children[i].icon=BASEURL+this.xplainindexData.content[2].children[i].icon
              }
              for (var j = 0; j < this.xplainindexData.content[2].children.length; j++) {
                this.xplainindexData.content[2].children[j].icon=BASEURLIMG+this.xplainindexData.content[2].children[j].icon
              }
              for (var k = 0; k < this.xplainindexData.content[0].children.length; k++) {
                this.xplainindexData.content[0].children[k].piclink=BASEURLIMG+this.xplainindexData.content[0].children[k].piclink
              }
              this.sortby=this.xplainindexData.content[2].sortby
              // for (var i = 0; i < this.xplainindexData.content[2].children.length; i++) {
              //   this.xplainindexData.content[2].children[i].icon=BASEURL+this.xplainindexData.content[2].children[i].icon
              // }
              
              // this.slides.startAutoplay();  
            },
            error=>{
              // alert('错误')
              console.log(error)
            }
        )
}
doInfinite(infiniteScroll){
  //       page	否	int	第几页 默认1
// num	否	int	每页显示多少个,默认20
// sort	是	int	排序方式，又首页接口返回的sortby
  let servedata={page:this.pagenum,num:5,sort:this.sortby}
         this.appService.explainrecommendtaped(servedata).then(
            res => {
              
              if(res.content.lessions.length>0){
                  this.pagenum=this.pagenum+1;
                 this.xplainindexData.content[2].children=this.xplainindexData.content[2].children.concat(res.content.lessions)
                  infiniteScroll.complete();
              }

              console.log(res)
            },
            error=>{
              // alert('错误')
              console.log(error)
            }
        )
        //   if(this.selectNum==0){
        //   this.loadRecommendation(infiniteScroll);
        // }else if(this.selectNum==3){
        //   this.loadCharts(infiniteScroll);
        // }else{
        //   infiniteScroll.complete();
        // }

}
// 组件初始化完成（在第一轮 ngOnChanges 完成之后调用。 ( 译注：也就是说当每个输入属性的值都被触发了一次 ngOnChanges 之后才会调用 ngOnInit ，此时所有输入属性都已经有了正确的初始绑定值 )）
ngOnInit() {
  console.log('Initialized');
  console.warn('OnChanges和DoCheck钩子不要同时出现，互斥！。本例仅供学习');
}
// // 脏值检测器被调用后调用
// ngDoCheck() {
//   console.log('Do check');
// }
// 组件销毁之前
ngOnDestroy() {
  console.log('Destroy');
}
// 组件-内容-初始化完成 PS：指的是ContentChild或者Contentchildren
ngAfterContentInit() {
  // setTimeout(()=>{
  //   console.log('After content init');
  //   this.slides.startAutoplay()
  // },2000);
  
}
// ionViewDidEnter(){ 
//   console.log('ionViewDidEnter');
//   this.slides.startAutoplay(); 
// } 
// 组件内容脏检查完成
// ngAfterContentChecked() {
//   console.log('After content checked');
// }
// 组件视图初始化完成 PS：指的是ViewChild或者ViewChildren
// ngAfterViewInit() {
//   console.log('After view init');
// }
// 组件视图脏检查完成之后
// ngAfterViewChecked() {
//   console.log('After view checked');
  

// }
// getItems(ev: any) {
//   // this.initData(true);
//   let searchText = ev.target.value;
//   console.log(searchText)
//   if (searchText && searchText.trim() != '') {
//     // this.items = this.items.filter((item) => {
//     //   let label = item.label;
//     //   return (label.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
//     // })
//   }
// }
}
