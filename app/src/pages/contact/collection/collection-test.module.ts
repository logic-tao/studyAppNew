import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionTestPage } from './collection-test';

@NgModule({
  declarations: [
    CollectionTestPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectionTestPage),
  ],
})
export class CollectionTestPageModule {}
