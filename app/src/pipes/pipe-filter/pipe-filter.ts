import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PipeFilterPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'pipeFilter',
})
export class PipeFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(list:any[], filterField:string,keyword:string) {
    if (!filterField || !keyword){
      return list;
    }
    return list.filter(item =>{

      // item返回true则把元素保留，
      let fieldValue =  item[filterField];


      return fieldValue.indexOf(keyword)>=0;
    });
  }
}
