import {Pipe, PipeTransform} from '@angular/core';
import { Vinyl } from './vinyl.model';

@Pipe ({
  name: 'band',
  pure: false
})
export class BandPipe implements PipeTransform {
  transform(input: Vinyl[], band){
    var output: Vinyl[] = [];
    if(band !== "all") {
      for(var i=0; i<input.length; i++) {
        if(input[i].band === band) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input; //return all
    }


  }
}
