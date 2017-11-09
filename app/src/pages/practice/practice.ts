import { Component } from '@angular/core';
import { NavController,App} from 'ionic-angular';
import {PagenextPage} from '../pagenext/pagenext';
import {PageexamPage} from '../pageexam/pageexam';

@Component({
  selector: 'page-home',
  templateUrl: 'practice.html'
})


export class HomePage {

  openExercise(){
    // this.navCtrl.push('PagenextPage');
    this.app.getRootNav().push('PagenextPage',{type:'1'});
  }
  openExam(){
    this.app.getRootNav().push('PagenextPage',{type:'2'});
    // this.navCtrl.push('PageexamPage',);
    // this.app.getRootNav().push('PageexamPage',{type:2,id:5});
  }

  items = [];
  constructor(public app: App,public navCtrl: NavController) {
   this.items = [
     {
       'title': 'Angular',
       'icon': 'angular',
       'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
       'color': '#E63135'
     },
     {
       'title': 'CSS3',
       'icon': 'css3',
       'description': 'The latest version of cascading stylesheets - the styling language of the web!',
       'color': '#0CA9EA'
     }

   ]
  }

}

