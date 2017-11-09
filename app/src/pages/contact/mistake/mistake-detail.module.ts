import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MistakeDetailPage } from './mistake-detail';

@NgModule({
  declarations: [
    MistakeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MistakeDetailPage),
  ],
})
export class MistakeDetailPageModule {}
