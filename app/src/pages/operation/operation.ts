import { Component,ViewChild,Inject,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp} from '../../app/app.component';
import { BASEURLIMG} from '../../theme/theme.config';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import Chart from 'chart.js'; // 导入chart.js
// import { VideoPlayer ,VideoOptions} from '@ionic-native/video-player';
/**
 * Generated class for the OperationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'OperationPage',
  segment: 'OperationPage'
})
@Component({
  selector: 'page-operation',
  templateUrl: 'operation.html',
})
export class OperationPage {
  @ViewChild('chartBar') chartBar: ElementRef;
  options:Object;
  @ViewChild('ionSlides') slides;
  private timer;
  @ViewChild("myVideo") myVideo: any;
  beginzuoti:boolean=false
  selectnum:any='0';
  selescore:number=0;
  dsdsf:any="<video id='video1'><video src='http://www.w3school.com.cn/i/movie.ogg' controls='controls'></video>"
  pingjianeirong:any=''
  pointexamData:any
  subjecjieguo:any=false
  pointsCount:number=0
  pointexamDataendTag:number=0
  playnowtime:any;
  countime=3
  shipingxiangqing:any
  shipingshuju:any
  shipinglianxi:any
  tongguanlv:any
  yiwanc:any
  weiwanc:any
  daantanchuang:boolean=false
  currentIndex:any=0
  zhegnquedaan:boolean=false
  oveer:boolean=false
  pinglunAr:any=[]
  chirData:any={}
  textdt:any=[
    {timu:"1+1=?",xuanze:[4,6,2,5],daan:2},
    {timu:"1*4=?",xuanze:[4,8,2,4],daan:4},
    {timu:"2+5=?",xuanze:[24,7,25,5],daan:7},
    {timu:"5-1=?",xuanze:[14,64,4,5],daan:4}
    ]
    zuotinum:number=0
  // videoOpts : VideoOptions ;
  constructor(private screenOrientation: ScreenOrientation,public appComponent:MyApp,@Inject('appService') private appService,public navCtrl: NavController, public navParams: NavParams) {
    let num = navParams.get('num');
    
    // this.selectnum=num;
    this.tapelessiondetail()
    
    console.log('id:'+num+',tokenId:'+this.appComponent.userinfo.tokenId+',realname:'+this.appComponent.userinfo.realname)
    
    // if(num==0){
    //   this.videoOpts = {volume : 1.0};
    //   this.videoPlayer.play('http://www.runoob.com/try/demo_source/mov_bbb.mp4').then(() => {
    //     console.log('video completed');
    //    }).catch(err => {
    //     console.log(err);
    //    });
    // }
    this.options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares at a specific website, 2014'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        data: [
          { name: 'Microsoft Internet Explorer', y: 56.33 },
          { name: 'Chrome', y: 24.03 },
          { name: 'Firefox', y: 10.38 },
          { name: 'Safari', y: 4.77 },
          { name: 'Opera', y: 0.91 },
          { name: 'Proprietary or Undetectable', y: 0.2 }
        ]
      }]
    }

  }
  ionViewDidEnter(){

  }
  showChart(){
    // this.chirData={xdata:xdata,ydata:ydata,backgroundColor:backgroundColor,borderColor:borderColor}
    Chart.Bar(this.chartBar.nativeElement.getContext("2d"), {
      data: {
        labels: this.chirData.xdata,//横-题目序号
        datasets: [{
          label: '练习统计表',
          data: this.chirData.ydata,//数值
          backgroundColor:this.chirData.backgroundColor,
          borderColor: this.chirData.borderColor,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                  return value+'%';
              }
          }
          }]
        },
        title: {
          display: true,
          text: '每道题准确率统计'
      }
      }
    });
  }
  jiesuoclick(){
    this.screenOrientation.unlock();
  }
  dafen(num){
    this.selescore=num
  }
daanclick(select){
  // this.zhegnquedaan=true
  this.pointexamData[this.zuotinum].useranswer=select
  if(select==this.pointexamData[this.zuotinum].answer){
    // alert('正确')
    this.appComponent.presentToast('正确!');  
  }else{
    // alert('错误')
    this.appComponent.presentToast('错误!');  
  }
}
shangSubject(){
  this.slides.slidePrev()
}
shuclick(){
  console.log('=============shuclick==========');
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
}

pingmuclick(){
  console.log('=============pingmuclick==========');
  console.log(this.screenOrientation.ORIENTATIONS); // logs the current orientation, example: 'landscape'
  
  // set to landscape
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  
  // allow user rotate
  // this.screenOrientation.unlock();
  
  // detect orientation changes
  this.screenOrientation.onChange().subscribe(
     () => {
         console.log("Orientation Changed");
     }
  );
}
showpop(){
  this.daantanchuang=true
}
tijiaoSubject(){
  this.subjecjieguo=true
  this.yiwanc=0
  this.weiwanc=0
  let zhegnque=0;
//     yiwanc:any
// weiwanc:any
let servedata=[]
          for (var i = 0; i < this.shipinglianxi.length; i++) {
            servedata.push({id:this.shipinglianxi[i].id,answer:this.shipinglianxi[i].useranswer})
            if(this.shipinglianxi[i].useranswer==''){
              this.weiwanc=this.weiwanc+1
              servedata[i].answer=''
            }else{
this.yiwanc=this.yiwanc+1
if(this.shipinglianxi[i].useranswer==this.shipinglianxi[i].answer){
  zhegnque=zhegnque+1
}
            }
      }
      this.tongguanlv=zhegnque/this.shipinglianxi.length
  this.daantanchuang=true


  console.log(servedata)
  this.appService.tapelessionanswers({answers:servedata}).then(
  res => {
    console.log('tapelessionanswers')
    console.log(res)
    // this.tapelessioncomments()
  },
  error=>{
    // alert('错误')
    console.log('tapelessionanswers========err')
    console.log(error)
  }
)
      setTimeout(()=>{
        this.showChart()
    },1000);
  

}
tozuotijieshi(j){
  this.slides.slideTo(j)
  this.daantanchuang=false
  this.shipinglianxi[j].showanswer=true
}
pinglun(i,status){
  let servedata={id:this.pinglunAr[i].id,status:status,tokenId:this.appComponent.userinfo.tokenId}
  console.log(servedata)
  this.appService.tapelessionsteportop(servedata).then(
  res => {
    console.log('tapelessionsteportop')
    console.log(res)
    this.tapelessioncomments()
  },
  error=>{
    // alert('错误')
    console.log('tapelessionsteportop========err')
    console.log(error)
  }
)
}
nextSubject(i){
  if(this.shipinglianxi[i].useranswer===''){
this.appComponent.presentToast('请输入答案!'); 
  }else{
    // this.cunchushuj(i)
  // this.listDetailData[i].showanswer=true
  this.slides.slideNext()
  }

 // this.navCtrl.push(Pageexam01Page);
}
indexplayvideourl(){
  let servedata={id:this.shipingxiangqing.lession.curl}
      this.appService.indexplayvideourl(servedata).then(
      res => {
        
        this.shipingshuju=res
        this.countviodtime()
        console.log('indexplayvideourl')
        console.log(res)
      },
      error=>{
        // alert('错误')
        console.log(error)
      }
  )
}
compare(propertyName) {
  return function(object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];
    if (value2 > value1) {
      return 1;
    } else if (value2 < value1) {
      return -1;
    } else {
      return 0;
    }
  }
}
selectclick(i,answer?:any){
      if(this.subjecjieguo){return}
      this.shipinglianxi[i].useranswer=answer
  
      // this.shipinglianxi[i].showanswer=true
      if(this.shipinglianxi[i].answer==answer){
        this.shipinglianxi[i].jieguo=2
      }else{
        this.shipinglianxi[i].jieguo=3
      }
    }
ionSlideDidChange(){
  this.currentIndex = this.slides.getActiveIndex();
 console.log('Current index is', this.currentIndex);
 
}
hidejieda(){
  this.daantanchuang=false
}
getRandom(){
  let max=11;
  let min=0;
  var r = Math.random() * (max - min);
  var re = Math.round(r + min);
  re = Math.max(Math.min(re, max), min)
   
  return re;
}
tapelessioncorrectrate(){//统计表数据
  let servedata={lid:this.navParams.data.num}
  this.appService.tapelessioncorrectrate(servedata).then(
    res => {
      // alert('正确')
      console.log('=======tapelessioncorrectrate========')
      console.log(res)
      let xdata=[]
      let ydata=[]
      let backgroundColor=[]
      let borderColor=[]
          let backgroundColorArr=[
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(155, 99, 132, 0.2)',
            'rgba(154, 162, 235, 0.2)',
            'rgba(155, 206, 86, 0.2)',
            'rgba(175, 192, 192, 0.2)',
            'rgba(53, 102, 255, 0.2)',
            'rgba(155, 159, 64, 0.2)'
          ];
          let borderColorArr= [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(155,99,132,1)',
            'rgba(154, 162, 235, 1)',
            'rgba(155, 206, 86, 1)',
            'rgba(175, 192, 192, 1)',
            'rgba(53, 102, 255, 1)',
            'rgba(155, 159, 64, 1)'
          ];
          let setnum=0;
          let xstring='';
          let count=0;
          let ycount=0;
      if(res.code==200){
        for (var i = 0; i < res.content.length; i++) {
          setnum=this.getRandom()
          xstring='第'+(i+1)+'题'
          count=parseInt(res.content[i].correct)+parseInt(res.content[i].error)
          xdata.push(xstring)
          if(count==0){
            ydata.push(0)
          }else{
            ycount=parseInt(res.content[i].correct)/count*100
            ycount=Math.round(ycount)
            ydata.push(ycount)
          }
          // ydata.push(parseInt(res.content[i].id))
          backgroundColor.push(backgroundColorArr[setnum])
          borderColor.push(borderColorArr[setnum])
        }
        this.chirData={xdata:xdata,ydata:ydata,backgroundColor:backgroundColor,borderColor:borderColor}
      }else{

      }

    },
    error=>{
      // alert('错误')
      console.log(error)
    }
)
}
tapelessioncomments(){
      let servedata={id:this.navParams.data.num}
    this.appService.tapelessioncomments(servedata).then(
      res => {
        // alert('正确')
        console.log('=======tapelessioncomments========')
        console.log(res)
        if(res.code==200){
          this.pinglunAr=res.content
          for (var i = 0; i < this.pinglunAr.length; i++) {
            this.pinglunAr[i].score=parseInt(this.pinglunAr[i].score)
            let newd=parseInt(this.pinglunAr[i].created_at)*1000
            this.pinglunAr[i].created_at=new Date(newd).getFullYear()+'/'+(new Date(newd).getMonth()+1)+'/'+new Date(newd).getDate()
            if(this.pinglunAr[i].step==null){this.pinglunAr[i].step=0}else{this.pinglunAr[i].step=parseInt(this.pinglunAr[i].step)}
            if(this.pinglunAr[i].top==null){this.pinglunAr[i].top=0}else{this.pinglunAr[i].top=parseInt(this.pinglunAr[i].top)}
          }
          this.pinglunAr.sort(this.comparisonFunction('top'))
          // this.shipinglianxi=res.content
          // for (var i = 0; i < this.shipinglianxi.length; i++) {
          //   this.shipinglianxi[i].showanswer=false
          //   this.shipinglianxi[i].useranswer=''
          //   this.shipinglianxi[i].jieguo=0//0 未解答 1已解答 2 正确 3 错误 
          //   if(this.shipinglianxi[i].type=='1'){
          //     this.shipinglianxi[i].content=eval('(' +this.shipinglianxi[i].content+ ')')
          //   }
            
          // }
          // console.log('tapelessiontapetest')//type 1,选择题，2.填空题 3.问答题 4.判断题
          // console.log(res)
        }else{

        }

      },
      error=>{
        // alert('错误')
        console.log(error)
      }
  )
}
tapelessiontapetest(){//试题
    // let servedata={id:this.shipingxiangqing.lession.curl}
    let servedata={id:this.navParams.data.num}
    this.appService.tapelessiontapetest(servedata).then(
      res => {
        // alert('正确')
        if(res.code==200){
          

          for (var i = 0; i < res.content.length; i++) {
            res.content[i].showanswer=false
            res.content[i].useranswer=''
            res.content[i].jieguo=0//0 未解答 1已解答 2 正确 3 错误 
            if(res.content[i].type=='1'){
              res.content[i].content=eval('(' +res.content[i].content+ ')')
            }
            if(res.content[i].content.A.indexOf("/upload")>0){
              res.content[i].content.A=res.content[i].content.A.replace(/\/upload/g, 'http://101.132.70.102/upload')
            }
            if(res.content[i].content.B.indexOf("/upload")>0){
              res.content[i].content.B=res.content[i].content.B.replace(/\/upload/g, 'http://101.132.70.102/upload')
            }
            if(res.content[i].content.C.indexOf("/upload")>0){
              res.content[i].content.C=res.content[i].content.C.replace(/\/upload/g, 'http://101.132.70.102/upload')
            }
            if(res.content[i].content.D.indexOf("/upload")>0){
              res.content[i].content.D=res.content[i].content.D.replace(/\/upload/g, 'http://101.132.70.102/upload')
            }  
            if(res.content[i].title.indexOf("/upload")>0){
              res.content[i].title=res.content[i].title
            }
            
          }
          this.shipinglianxi=res.content
          console.log('tapelessiontapetest')//type 1,选择题，2.填空题 3.问答题 4.判断题
          console.log(res)
        }else{

        }

      },
      error=>{
        // alert('错误')
        console.log(error)
      }
  )
}
xiayiti(){
  this.zuotinum=this.zuotinum+1
  // // this.zhegnquedaan=false
  //     if(this.zuotinum==this.pointexamData.length-1){
  //     // this.oveer=true
  //   }else{
  //     this.zuotinum=this.zuotinum+1
  //   }
}
tapelessionpointexam(id){
   // id	是	断点id	用户名
  let servedata={id:id}
          this.appService.tapelessionpointexam(servedata).then(
            res => {
              // alert('正确')
              console.log('tapelessionpointexam')
              
              if(res.code==200){
                
                this.pointexamDataendTag=res.content.length-1
                for (var i = 0; i < res.content.length; i++) {
                  res.content[i].content=eval('(' +res.content[i].content+ ')')
                  res.content[i].useranswer=''

                  if(res.content[i].content.A.indexOf("/upload")>0){
                    res.content[i].content.A=res.content[i].content.A.replace(/\/upload/g, 'http://101.132.70.102/upload')
                  }
                  if(res.content[i].content.B.indexOf("/upload")>0){
                    res.content[i].content.B=res.content[i].content.B.replace(/\/upload/g, 'http://101.132.70.102/upload')
                  }
                  if(res.content[i].content.C.indexOf("/upload")>0){
                    res.content[i].content.C=res.content[i].content.C.replace(/\/upload/g, 'http://101.132.70.102/upload')
                  }
                  if(res.content[i].content.D.indexOf("/upload")>0){
                    res.content[i].content.D=res.content[i].content.D.replace(/\/upload/g, 'http://101.132.70.102/upload')
                  }  
                  if(res.content[i].title.indexOf("/upload")>0){
                    res.content[i].title=res.content[i].title.replace(/\/upload/g, 'http://101.132.70.102/upload')
                  }
                }
              }
              
              console.log(res.content)
              this.pointexamData=res.content
              console.log(res)
            },
            error=>{
              // alert('错误')
              console.log(error)
            }
        )
}

tapelessionpushcomment(){
//       cid	是	int	录播课id
// detail	是	string	评论内容
// score	否	int	评分
 let servedata={cid:this.shipingxiangqing.lession.id,detail:this.pingjianeirong,score:this.selescore,tokenId:this.appComponent.userinfo.tokenId}
         this.appService.tapelessionpushcomment(servedata).then(
           res => {
             // alert('正确')
             this.pingjianeirong='';
             console.log('tapelessionpushcomment成功')
             if(res.code==200){
              this.appComponent.presentToast('评价成功!');
             }else{
              this.appComponent.presentToast(res.message);
             }
             console.log(res)
           },
           error=>{
             // alert('错误')
             this.appComponent.presentToast('评价失败!');
             console.log('tapelessionpushcomment失败')
             console.log(error)
           }
       )
}
onfullscreenchange(){
  console.log('===========onfullscreenchange===fun=====')
  this.myVideo.nativeElement.onfullscreenchange=()=>{
    console.log('===========onfullscreenchange========')
    this.pingmuclick()
  }
}
onwebkitfullscreenchange(){
  console.log('===========onwebkitfullscreenchange===fun=====')
  this.myVideo.nativeElement.onwebkitfullscreenchange=()=>{
    console.log('===========onwebkitfullscreenchange========')
    this.myVideo.isfullscreenchange=!this.myVideo.isfullscreenchange;
    
    if(this.myVideo.isfullscreenchange){
      this.pingmuclick()
    }else{
      this.shuclick()
    }
  }
}
onwebkitfullscreenerror(){
  console.log('===========onwebkitfullscreenerror===fun=====')
  this.myVideo.nativeElement.onwebkitfullscreenerror=()=>{
    console.log('===========onwebkitfullscreenerror========')
    this.pingmuclick()
  }
}
  ionViewDidLoad() {
    this.myVideo.nativeElement.defaultPlaybackRate=1
    console.log('ionViewDidLoad OperationPage');
    this.myVideo.nativeElement.onseeked=()=>{
      // alert('df')
      // if(this.myVideo.nativeElement.currentTime!=20){
      //     this.myVideo.nativeElement.currentTime=20
      // }
      console.log('onseeked'+this.myVideo.nativeElement.currentTime)
      let retudata=this.panduanpoingshow(this.myVideo.nativeElement.currentTime)
      if(retudata.isshow){
        this.stopViod(retudata.num)
      }
      // this.myVideo.nativeElement.pause()
      
      // this.myVideo.nativeElement.load()
      // this.myVideo.nativeElement.play()
    }
    console.log('this.myVideo.nativeElement')
    console.log(this.myVideo)
    this.onfullscreenchange()
    this.onwebkitfullscreenchange()
    this.myVideo.isfullscreenchange=false;
    // this.onwebkitfullscreenerror()


  }
  kavoid(){
    var dd = this.myVideo
    console.log(dd)
  }
  panduanpoingshow(time){
    let retrundate={isshow:false,time:0,num:0}
          for (var k = 0; k < this.shipingxiangqing.points.length; k++) {
            // this.shipinglianxi.points[k].isshow=false
            let timenum =parseInt(this.shipingxiangqing.points[k].postime)
            if(!retrundate.isshow){
                if(!this.shipingxiangqing.points[k].isshow){
                  if(time>=timenum){
                  retrundate={isshow:true,time:timenum,num:k}
                  this.myVideo.nativeElement.currentTime=timenum+1;
                  }
                }
            }
          }
          return retrundate;
  }
  countviodtime(){
    if(!this.shipingshuju.PlayInfoList){return}
    this.timer = setInterval(()=>{
      // this.playnowtime=parseInt(this.myVideo.nativeElement.currentTime)
      // if(this.playnowtime!=0&&this.playnowtime%30==0){
      //   this.stopViod()this.stopViod()
      // }
      if(this.myVideo){
        
        if(this.countime!=3){this.countime+=1}
        console.log('=======countviodtime========');
        console.log(this.myVideo.nativeElement.currentTime);
        console.log(this.shipingxiangqing.points[this.pointsCount].postime)
        console.log(this.countime)
        console.log(this.zuotinum)
        if(parseInt(this.myVideo.nativeElement.currentTime)==this.shipingxiangqing.points[this.pointsCount].postime){
          if(this.countime==3){
            this.stopViod(this.pointsCount)
            clearInterval(this.timer);
          }
        }

        console.log(this.myVideo.nativeElement.currentTime)
      }

    },1000)
  }
  tapelessiondetail(){
    let servedata={id:this.navParams.data.num,tokenId:this.appComponent.userinfo.tokenId}
    this.appService.tapelessiondetail(servedata).then(
      res => {
        // alert('正确')
        if(res.code==200){
          if(res.content.lession&&res.content.lession.summary.indexOf("/upload")>0){
            res.content.lession.summary=res.content.lession.summary.replace(/\/upload/g, 'http://101.132.70.102/upload')
          }
          this.shipingxiangqing=res.content
                    for (var k = 0; k < this.shipingxiangqing.points.length; k++) {
            this.shipingxiangqing.points[k].isshow=false
          }
          if(this.shipingxiangqing.lession.curl==''){
            this.appComponent.presentToast('无视频curl!');
          }else{
            this.indexplayvideourl()
            this.tapelessiontapetest()
            this.tapelessioncomments()
            this.tapelessioncorrectrate()
          }
          
          this.tapelessionpointexam(this.shipingxiangqing.points[0].id)
        }
        
        console.log('tapelessiondetail')
        console.log(res)
      },
      error=>{
        // alert('错误')
        console.log(error)
      }
  )
    
  }
  
  ngOnDestroy(){
  if(this.timer){
  clearInterval(this.timer);
  }
  }
  comparisonFunction(propertyName){    
    return function(obj1, obj2){
      var val1 = obj1[propertyName];   
      var val2 = obj2[propertyName];  
      if (val1 > val2){     
        return -1;  
      } else 
      if (val1 < val2) {   
        return 1;      
      } 
      else {    
        return 0;    
      }      
    };
  }
  stopViod(num){
    this.shipingxiangqing.points[num].isshow=true
  this.myVideo.nativeElement.pause()
  this.beginzuoti=true
}
asldfjl(){
  alert('dd')
}
  playViod(){
    this.zuotinum=0
    this.countime=0
    this.myVideo.nativeElement.play()
    this.beginzuoti=false
    if(this.shipingxiangqing.points.length!=this.pointsCount+1){
      this.pointsCount+=1
      this.tapelessionpointexam(this.shipingxiangqing.points[this.pointsCount].id)
    }
     this.countviodtime()
  }
 

}
