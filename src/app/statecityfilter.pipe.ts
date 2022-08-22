import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statecityfilter'
})
export class StatecityfilterPipe implements PipeTransform {

  transform(value: any, state: string): unknown {
    return value.filter(function(state: string){
      if(value.state==state)
      return value.city;
  })
  }

}
