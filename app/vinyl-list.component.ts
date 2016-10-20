import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Vinyl }  from './vinyl.model';

@Component({
  selector: 'vinyl-list',
  template: `
  <select (change)="onBoughtChange($event.target.value)" class="bought">
    <option value="all">Show All</option>
    <option value="isBought">Bought</option>
    <option value="notBought">Still on sale</option>
  </select>
  <div class="vinyl"  *ngFor="let currentVinyl of childVinylList | genre: selectedGenre | band: selectedBand | bought: selectedBought">
    <div class="album">
    <vinyl-display
      [childVinyl]="currentVinyl"
      (clickSender)="showDetails($event)"
    ></vinyl-display>
    </div>
    <select (change)="onCatChange($event.target.value)" class="genre">
      <option value="all">Show All</option>
      <option value="rock">Rock Only</option>
      <option value="loudsound">Loud Sound Only</option>
    </select>
    <select (change)="onBandChange($event.target.value)" class="band">
      <option value="all">Show All</option>
      <option value="Three Dog Night">Three Dog Night</option>
      <option value="Hermitude">Hermitude</option>
      <option value="SpaceNeighboor">SpaceNeighboor</option>
      <option value="Reggae Rocker">Reggae Rocker</option>
    </select>
    <button class="btn btn-default"(click)="editButtonHasBeenClicked(currentVinyl)" >Edit</button>
  </div>
  `
})

export class VinylListComponent {
  public selectedGenre: string="all";
  public selectedBand: string="all";
  public selectedBought: string="notBought";
  @Input() childVinylList: Vinyl[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(vinylToEdit: Vinyl){
    this.clickSender.emit(vinylToEdit);
  }
  onCatChange(optionFromMenu){
    this.selectedGenre = optionFromMenu;
    console.log(this.selectedGenre);
  }
  onBandChange(optionFromMenu){
    this.selectedBand = optionFromMenu;
  }
  onBoughtChange(optionFromMenu){
    this.selectedBought = optionFromMenu;
  }
}

// <input *ngIf="vinyl.bought === true" type="checkbox" checked (click)="toggleBought(false)"/>
// <input *ngIf="vinyl.bought === false" type="checkbox" (click)="toggleBought(true)"/>

// <vinyl-display [vinyl]="currentVinyl"></vinyl-display>
