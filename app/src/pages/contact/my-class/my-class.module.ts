import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MyclassPage} from "./my-class";


@NgModule({
  declarations: [
    MyclassPage,,
  ],
  imports: [
    IonicPageModule.forChild( MyclassPage,),
  ],
})
export class MyClassPageModule {}
