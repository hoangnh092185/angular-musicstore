import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Vinyl } from './vinyl.model';

@Component ({
  selector: 'new-vinyl',
  template: `
    <div>
      <div>
        <label>Enter Vinyl Name</label>
        <input #newName>
      </div>
      <div>
        <label>Enter Vinyl Band</label>
        <input #newBand>
      </div>
      <div>
        <label>Enter Vinyl Genre</label>
        <input #newGenre>
      </div>
      <div>
        <label>Enter Vinyl Price</label>
        <input #newPrice>
      </div>
      <button class="btn btn-primary" (click)="
        addClicked(newName.value, newBand.value, newGenre.value, newPrice.value);
        newName.value='';
        newBand.value='';
        newGenre.value='';
        newPrice.value='';
      ">Add</button>
    </div>
  `
})

export class NewVinylComponent {
  @Output() newVinylSender = new EventEmitter();
  addClicked(name: string, band: string, genre: string, price: number) {
      var newVinylToAdd: Vinyl = new Vinyl(name, band, genre, price);    this.newVinylSender.emit(newVinylToAdd);
    }
}
