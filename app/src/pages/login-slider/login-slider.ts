// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component, ViewChild,Inject} from '@angular/core';
import { AlertController, App, LoadingController, NavController, Slides, IonicPage } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import { MyApp} from '../../app/app.component';
@IonicPage()
@Component({
  selector: 'page-login-slider',
  templateUrl: 'login-slider.html',
})
export class LoginSliderPage {
  public loginForm: any;
  public backgroundImage = 'assets/icon/background-1.jpg';
  mobilelogin:any='18022366421';
  passwordlogin:any='12345678';
  mobile:any='';
  password1:any;
  password2:any;
  code:any;
  mobileback:any;
  passwordback1:any;
  passwordback2:any;
  codeback:any;
  constructor(
    public appComponent:MyApp,
    @Inject('appService') private appService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App
  ) { }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }
  usersendsms(){

        let servedata={mobile:this.mobile}
          // mobile	是	string	手机号
      this.appService.usersendsms(servedata).then(
          res => {
            this.code='123456'
            // this.navCtrl.setRoot(TabsPage);
            // this.app.getRootNav().push(TabsPage);
            // this.appComponent.presentToast('注册成功!');
            // this.goToLogin()
            // this.slides.startAutoplay();
            // this.appComponent.presentToast('登录成功!');
          },
          error=>{
            this.appComponent.presentToast('登录失败!');
          }
      )
  }
  usersendsmsback(){
            let servedata={mobile:this.mobileback}
          // mobile	是	string	手机号
      this.appService.usersendsms(servedata).then(
          res => {
            this.codeback='123456'
            // this.navCtrl.setRoot(TabsPage);
            // this.app.getRootNav().push(TabsPage);
            // this.appComponent.presentToast('注册成功!');
            // this.goToLogin()
            // this.slides.startAutoplay();
          },
          error=>{
            this.appComponent.presentToast('登录失败!');

          }
      )
  }
  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }
  login() {
    // this.app.getRootNav().push(TabsPage);
    // this.app.getRootNav().push(TabsPage);
    let servedata={mobile:this.mobilelogin,password:this.passwordlogin}
          // mobile	是	string	手机号
      // password	是	string	密码
    this.appService.userlogin(servedata).then(
      res => {
        if(res.code==200){
          res.content.userinfo.tokenId=res.content.tokenId
          this.appComponent.userinfo=res.content.userinfo
          this.appComponent.presentToast('登录成功!');
          this.app.getRootNav().push(TabsPage);
        }else{
          this.appComponent.presentToast(res.message);
        }
      },
      error=>{
        this.appComponent.presentToast('登录失败!');
      }
  )
  }

  signup() {
    // this.appComponent.presentToast('Thanks for signing up!');
    // this.navCtrl.push(HomePage);
    if(this.password1!=this.password2){this.appComponent.presentToast('密码不一样!');return}
    let servedata={mobile:this.mobile,password:this.password1,code:this.code}
        // mobile	是	string	手机号码
    // password	是	string	密码
    // code	否	string	短信验证码
    this.appService.userregister(servedata).then(
      res => {
        this.appComponent.presentToast('注册成功!');
        this.goToLogin()
        // this.slides.startAutoplay();
      },
      error=>{
        // alert('错误')
        console.log(error)
      }
  )
}
signupback(){
  // this.appComponent.presentToast('修改失败!');
  //   mobileback:any;
  // passwordback1:any;
  // passwordback2:any;
  // codeback:any;
      if(this.passwordback1!=this.passwordback1){this.appComponent.presentToast('密码不一样!');return}
    let servedata={mobile:this.mobileback,password:this.passwordback1,code:this.codeback}
        // mobile	是	string	手机号码
    // password	是	string	密码
    // code	否	string	短信验证码
    this.appService.userresetpwd(servedata).then(
      res => {
        // this.appComponent.presentToast('设置成功!');
        // this.goToLogin()
        this.app.getRootNav().push(TabsPage);
        // this.slides.startAutoplay();
      },
      error=>{
        // alert('错误')
        console.log(error)
      }
  )
}
  resetPassword() {
    this.appComponent.presentToast('An e-mail was sent with your new password.');
  }
}
