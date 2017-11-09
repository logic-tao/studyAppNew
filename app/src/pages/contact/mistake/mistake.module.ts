import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MistakePage } from './mistake';

@NgModule({
  declarations: [
    MistakePage,
  ],
  imports: [
    IonicPageModule.forChild(MistakePage),
  ],
})
export class MistakePageModule {}
