import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonModifyPage } from './person-modify';

@NgModule({
  declarations: [
    PersonModifyPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonModifyPage),
  ],
})
export class PersonModifyPageModule {}
