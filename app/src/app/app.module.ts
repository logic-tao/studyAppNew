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
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import {ExercisePage} from "../pages/contact/exercise/exercise";
import {ExerciseDetailPage} from "../pages/contact/exercise/exercise-detail";
import {RightDetailPage} from "../pages/contact/exercise/right-detail";
import {CollectionPage} from "../pages/contact/collection/collection";
import {CollectionListPage} from "../pages/contact/collection/collection-list";
import {HomeworkPage} from "../pages/contact/homework/homework";
import {MistakeDetailPage} from "../pages/contact/mistake/mistake-detail";
import {MistakePage} from "../pages/contact/mistake/mistake";
import {MistakeListPage} from "../pages/contact/mistake/mistake-list";
import {PersonPage} from "../pages/contact/my/person";
import {ApplyClassPage} from "../pages/contact/my-class/apply-class";
import {MyclassPage} from "../pages/contact/my-class/my-class";
import {MydataPage} from "../pages/contact/mydata/mydata";
import {MydatadetailPage} from "../pages/contact/mydata/mydatadetail";
import {SettingPage} from "../pages/contact/setting/setting";
import {TestPage} from "../pages/contact/test/test";
import {VideosPage} from "../pages/contact/videos/videos";
import {VideorecordPage} from "../pages/contact/videos/videorecord";
import {CollectionTestPage} from "../pages/contact/collection/collection-test";
import {HomeworkTestPage} from "../pages/contact/homework/homework-test";
import {PersonModifyPage} from "../pages/contact/my/person-modify";
// import { VideoPlayer } from '@ionic-native/video-player';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InteractPage,
    TabsPage,
    ExercisePage,
    ExerciseDetailPage,
    RightDetailPage,
    CollectionPage,
    CollectionListPage,
    HomeworkPage,
    MistakeDetailPage,
    MistakePage,
    MistakeListPage,
    PersonPage,
    ApplyClassPage,
    MyclassPage,
    MydataPage,
    MydatadetailPage,
    SettingPage,
    TestPage,
    VideosPage,
    VideorecordPage,
    CollectionTestPage,
    HomeworkTestPage,
    PersonModifyPage
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
    ExercisePage,
    ExerciseDetailPage,
    RightDetailPage,
    CollectionPage,
    CollectionListPage,
    HomeworkPage,
    MistakeDetailPage,
    MistakePage,
    MistakeListPage,
    PersonPage,
    ApplyClassPage,
    MyclassPage,
    MydataPage,
    MydatadetailPage,
    SettingPage,
    TestPage,
    VideosPage,
    VideorecordPage,
    CollectionTestPage,
    HomeworkTestPage,
    PersonModifyPage
  ],
  providers: [
    Camera,
    FileTransfer,
    File,
    FileTransferObject,
    StatusBar,
    SplashScreen,
    HttpModule,
    // VideoPlayer,
    {provide: 'appService',  useClass: AppService},
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
