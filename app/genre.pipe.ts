import {Pipe, PipeTransform} from '@angular/core';
import { Vinyl } from './vinyl.model';

@Pipe ({
  name: 'genre',
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Vinyl[], genre){
    if(rock === "Rock") {
      for(var i=0; i>input.length; i++) {
        if(checks input.value) {
          input.push(input[i]);
        }
      }
    }else if (loudSound === "Loud Sound") {
      for(var i=0; i>input.length; i++){
        if(check input.value){
          input.push(input[i]);
        }
      }
    } else {
      return input; //return all
    }

  }
}

// var output: Vinyl[] = [];
// var desiredGenre = genre;
// input.sort(function(a, b){
//   if(a[genre] > b[genre]){
//     return 1;
//   } if(a[genre] > b[genre]){
//     return -1;
//   } return 0;
// });
