import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Vinyl }  from './vinyl.model';

@Component({
  selector: 'vinyl-list',
  template: `
  <div class="vinyl"  *ngFor="let currentVinyl of childVinylList | genre: selectedGenre | band: selectedBand">
    <div class="album">
      <h1>Display name:</h1> {{currentVinyl.name}}
      <h1>Display band:</h1> {{currentVinyl.band}}
      <h1>Display genre:</h1> {{currentVinyl.genre}}
      <h1>Display price:</h1> {{currentVinyl.price}}
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
}


// <vinyl-display [vinyl]="currentVinyl"></vinyl-display>
