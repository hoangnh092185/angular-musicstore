import {Pipe, PipeTransform} from '@angular/core';
import { Vinyl } from './vinyl.model';

@Pipe ({
  name: 'genre',
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Vinyl[], genre){
    var output: Vinyl[] = [];
    if(genre !== "all") {
      for(var i=0; i<input.length; i++) {
        if(input[i].genre === genre) {
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






// var output: Vinyl[] = [];
// var desiredGenre = genre;
// input.sort(function(a, b){
//   if(a[genre] > b[genre]){
//     return 1;
//   } if(a[genre] > b[genre]){
//     return -1;
//   } return 0;
// });
