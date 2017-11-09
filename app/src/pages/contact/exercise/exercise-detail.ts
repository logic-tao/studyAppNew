import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ExerciseDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html',
})
export class ExerciseDetailPage {

  color: string = '';

  private tests: Test[] = [
    new Test("1",true,1),
    new Test("2",true,2),
    new Test("3",false,3),
    new Test("4",true,4),

  ]
  item: Object;
  time: Date = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get("subject");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciseDetailPage');
  }

  itemSelected(item,id) {
   // this.navCtrl.push(MistakeDetailPage,{subject:item,testID:id});
  }

}

export class Test {
  constructor(public name:string,
              public right:boolean,
              public id:number
              ){

  }
}
