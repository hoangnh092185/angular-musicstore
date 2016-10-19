import { Component } from '@angular/core';
import { Vinyl }  from './vinyl.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <h1>Music Store</h1>
  </div>
  <div class="container">
    <div class="row">
    <div class="col-md-7">
      <vinyl-list
        [childVinylList]="masterVinylList"
        (clickSender)="showDetails($event)"
      ></vinyl-list>
      </div>
      <div class="col-md-5">
      <edit-vinyl
        [childSelectedVinyl]="selectedVinyl"
        (doneClickedSender)="finishedEditing()"
      ></edit-vinyl>
      <new-vinyl
        (newVinylSender) ="addVinyl($event)"
      ></new-vinyl>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterVinylList: Vinyl[] = [
    new Vinyl("Hermitude Album","Hermitude", "something", 0.20),
    new Vinyl("SpaceNeighboor Album","SpaceNeighboor", "something", 4.0),
    new Vinyl("Reggae Rocker Album","Reggae Rocker", "reggae", 3.0),
    new Vinyl("The Best of Three Dog Night","Three Dog Night", "rock", 10.0)
  ];
  selectedVinyl: Vinyl = null;
  showDetails(clickedVinyl: Vinyl){
    this.selectedVinyl = clickedVinyl;
  }
  finishedEditing(){
    this.selectedVinyl = null;
  }
  addVinyl(newVinylFromChild: Vinyl){
    this.masterVinylList.push(newVinylFromChild);
  }
}
