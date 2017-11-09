import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MistakeListPage } from './mistake-list';

@NgModule({
  declarations: [
    MistakeListPage,
  ],
  imports: [
    IonicPageModule.forChild(MistakeListPage),
  ],
})
export class MistakeListPageModule {}
