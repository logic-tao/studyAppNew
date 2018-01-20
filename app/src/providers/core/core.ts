import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CoreProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CoreProvider {

  constructor(public http: Http) {

  }

  public baseUrl: string = 'httP://222.73.69.146:8088/index.php/demo/index/';
}
