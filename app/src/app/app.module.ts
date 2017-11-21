import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/practice/practice';
import {InteractPage} from "../pages/interaction/interaction";
import { TabsPage } from '../pages/tabs/tabs';
import {AppService} from "../theme/AppService";
import {PageNewPage} from '../pages/page-new/page-new';
import {PagenextPage} from '../pages/pagenext/pagenext';
import {PageexamPage} from '../pages/pageexam/pageexam';
import {PagedetailPage} from  '../pages/pagedetail/pagedetail';
import {Pageexam01Page} from  '../pages/pageexam01/pageexam01';
import {PipeFilterPipe} from '../pipes/pipe-filter/pipe-filter';
import {Pageexam02Page} from '../pages/pageexam02/pageexam02';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from "@angular/forms";
// import { VideoPlayer } from '@ionic-native/video-player';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InteractPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InteractPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    // VideoPlayer,
    {provide: 'appService',  useClass: AppService},
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
