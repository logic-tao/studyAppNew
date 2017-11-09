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

  public baseUrl: string = 'httP://101.201.238.157/index.php/demo/index/';
}
