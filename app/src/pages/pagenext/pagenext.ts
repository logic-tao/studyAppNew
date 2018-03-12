import {AfterViewChecked, Component, Input, OnChanges, OnInit,Inject} from '@angular/core';
import { IonicPage, NavController, NavParams,App} from 'ionic-angular';
import {PagedetailPage} from '../pagedetail/pagedetail';
import { Http, Response } from '@angular/http';
import {FormControl} from "@angular/forms";
import {MyApp} from "../../app/app.component";
import 'rxjs/Rx'
@IonicPage()
@Component({
  selector: 'page-pagenext',
  templateUrl: 'pagenext.html',
})
export class PagenextPage implements  OnInit,OnChanges{

  // 关键字
  private  keyword:string;

  private  titleFilter:FormControl = new  FormControl();

 // 接收数据
  listData: any;
  items: any[];
  copeyitems:any[];
  inpustring:any=''
  // 科目
  subjectindexData:any=[]
  subject: string ="1";
  subjectNum: string="1";
  type : string;
  subjectstitle:string
  constructor(@Inject('appService') private appService,public appComponent:MyApp,public app: App,public navCtrl: NavController, public navParams: NavParams, private  http: Http) {
          this.subjectindex()
             this.titleFilter.valueChanges
               .debounceTime(500)
               .subscribe(value=>this.keyword=value);
             this.type = this.subject;
             this.initializeItems();
             
      }
  ngOnInit(){
    console.log(this.type);

  }
  backclck(){
    this.navCtrl.pop();
  }
  subjectindex(){
    console.log('dddd');
    this.appService.subjectindex().then(
      res => {
        if(res.code==200){
          this.subjectindexData=res.content
          // this.subject=this.subjectindexData[0].id;
          this.subjectstitle=this.subjectindexData[0].subject_name;
          this.Selected(this.subjectindexData[0].id);
        }
        
      },
      error=>{
        // alert('错误')
        console.log(error)
      }
  )
  }
close(){
  this.inpustring=''
}
  initializeItems() {
    this.items = this.copeyitems;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;
    this.inpustring=val
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.copeyitems.filter((item) => {
        return (item.cname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  ngOnChanges(){


  }

  deepCoyp(source) { 
    var result:any[]=[]
  var result:any[];
  for (var key in source) {
    result[key]=source[key]
        // result[key] = typeof source[key]==='object'? this.deepCoyp(source[key]): source[key];
    } 
    return result; 
  }
  ionViewDidLoad() {
//     console.log('ionViewDidLoad PagenextPage');
//     // 网络请求
//     //htt  p://js onplaceholder.typicode.com/photos
//     console.log(this.type);

//     console.log("http://47.100.203.126:81/index.php/demo/index/examList?cid=" + this.subject +"&type="+this.navParams.data.type);
//     this.http.request('http://47.100.203.126:81/index.php/demo/index/examList?cid='+this.subject+'&type='+this.navParams.data.type)
//       .subscribe((res: Response) => {
// this.items =[]
//       console.log(res.url);
//       //console.log(res.json().data);
//         this.listData = res.json();
//         for (var i = 0; i < this.listData.length; i++) {
//           this.listData[i].open=false
//           this.listData[i].arr=[3,4,5]
//                               this.items.push({cname:this.listData[i].cname,id:this.listData[i].id})
//                               for (var j = 0; j < this.listData[i].children.length; j++) {
//             this.items.push({cname:this.listData[i].children[j].cname,id:this.listData[i].children[j].id})
//           }
//         }
//         this.copeyitems=this.deepCoyp(this.items)
//       });
  }
  



itemSelectedchild(event,i,j){
  this.appComponent.pagenextarr.childnum=j
  this.appComponent.pagenextarr.num=i
  event.stopPropagation();
  this.app.getRootNav().push('PageexamPage',{type:this.navParams.data.type,id:this.listData[i].children[j].id,subjectstitle:this.subjectstitle});
  console.log(j)
}
itemSelectedserach(id){
this.app.getRootNav().push('PageexamPage',{type:this.navParams.data.type,id:id,subjectstitle:this.subjectstitle});
}

  itemSelected(j){
    console.log('============itemSelected============')
    this.appComponent.pagenextarr={listData:this.listData,num:j,childnum:null}
    console.log(this.appComponent.pagenextarr)
    console.log(this.listData[j])
    if(this.listData[j].children.length==0){
      this.app.getRootNav().push('PageexamPage',{type:this.navParams.data.type,id:this.listData[j].id,subjectstitle:this.subjectstitle});
    }else{
      
           for (var i = 0; i < this.listData.length; i++) {

              if(i==j){
                if(this.listData[i].open){this.listData[i].open=false}else{this.listData[i].open=true}
              }else{
                this.listData[i].open=false
              }
        }
    }

    // alert(i)
    // this.navCtrl.push(PagedetailPage,{subject:item});

  }

changeVersion(){
  for(var j = 0; j < this.subjectindexData.length; ++j){
    if(this.subjectindexData[j].id==this.subject){
      this.subjectstitle=this.subjectindexData[j].subject_name;
    }
  }
  console.log(this.subject)
   
  this.Selected(this.subject)
}
  Selected(subject){
    this.subjectNum = subject;
    this.subject=subject;
    
    this.http.request('http://47.100.203.126:81/index.php/demo/index/examList?cid='+this.subjectNum+'&type='+this.navParams.data.type)
      .subscribe((res: Response) => {

        console.log(res.url);
        //console.log(res.json().data);
        this.listData = res.json();
        this.items =[]
         for (var i = 0; i < this.listData.length; i++) {
          this.listData[i].open=false;
          this.listData[i].arr=[3,4,5];
          this.items.push({cname:this.listData[i].cname,id:this.listData[i].id})
          for (var j = 0; j < this.listData[i].children.length; j++) {
            this.items.push({cname:this.listData[i].children[j].cname,id:this.listData[i].children[j].id})
          }
        }
        this.copeyitems=this.deepCoyp(this.items)
      });


  }


}


