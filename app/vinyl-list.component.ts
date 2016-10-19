import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Vinyl }  from './vinyl.model';

@Component({
  selector: 'vinyl-list',
  template: `
  <div class="vinyl"  *ngFor="let currentVinyl of childVinylList | genre:selectedGenre">
    <div class="album">
      <h1>Display name:</h1> {{currentVinyl.name}}
      <h1>Display band:</h1> {{currentVinyl.band}}
      <h1>Display genre:</h1> {{currentVinyl.genre}}
      <h1>Display price:</h1> {{currentVinyl.price}}
    </div>
    <select (change)="onCatChange($event.target.value)" class="genre">
      <option value="All">Show All</option>
      <option value="Rock">Rock Only</option>
      <option value="Loud Sound">Loud Sound Only</option>
    </select>
    <button class="btn btn-default"(click)="editButtonHasBeenClicked(currentVinyl)" >Edit</button>
  </div>
  `
})

export class VinylListComponent {
  public selectedSort: string="name";
  @Input() childVinylList: Vinyl[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(vinylToEdit: Vinyl){
    this.clickSender.emit(vinylToEdit);
  }
  onSortChange(optionFromMenu){
    this.selectedGenre = optionFromMenu;
    console.log(this.selectedGenre);
  }
}


// <vinyl-display [vinyl]="currentVinyl"></vinyl-display>
