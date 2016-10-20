import { Component, Input } from '@angular/core';
import { Vinyl } from './vinyl.model';

@Component ({
  selector: 'vinyl-display',
  template: `
  <div>
  <input type="checkbox" (click)="toggleBought()"/>
    <h1>Display name:</h1> {{childVinyl.name}}
    <h1>Display band:</h1> {{childVinyl.band}}
    <h1>Display genre:</h1> {{childVinyl.genre}}
    <h1>Display price:</h1> {{childVinyl.price}}
  </div>
  `
})
export class VinylComponent {
  @Input() childVinyl: Vinyl;
  toggleBought() {
    this.childVinyl.bought = true;
    console.log(this.childVinyl.bought);
  }
}
