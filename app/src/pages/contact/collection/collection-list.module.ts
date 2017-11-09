import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionListPage } from './collection-list';

@NgModule({
  declarations: [
    CollectionListPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectionListPage),
  ],
})
export class CollectionListPageModule {}
