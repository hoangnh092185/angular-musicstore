import {Pipe, PipeTransform} from '@angular/core';
import {Vinyl} from './vinyl.model';

@Pipe ({
  name: "bought",
  pure: false
})
export class BoughtPipe implements PipeTransform {
  transform(input: Vinyl[], desiredBought){
  var output: Vinyl[] = [];
  if(desiredBought === "notBought") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].bought === false) {
        output.push(input[i]);
      }
    }
    return output;
  }else if (desiredBought === "isBought"){
    for (var i =0; i < input.length; i++) {
      if (input[i].bought === true) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }
}
