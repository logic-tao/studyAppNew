import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WatchLivePage } from './watch-live';

@NgModule({
  declarations: [
    WatchLivePage,
  ],
  imports: [
    IonicPageModule.forChild(WatchLivePage),
  ],
})
export class WatchLivePageModule {}
