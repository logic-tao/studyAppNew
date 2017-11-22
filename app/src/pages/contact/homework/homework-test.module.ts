import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeworkTestPage } from './homework-test';

@NgModule({
  declarations: [
    HomeworkTestPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeworkTestPage),
  ],
})
export class HomeworkTestPageModule {}
