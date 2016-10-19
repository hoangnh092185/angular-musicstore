import { Component, Input } from '@angular/core';
import { Vinyl } from './vinyl.model';

@Component ({
  selector: 'vinyl-display',
  template: `
  <div>
  <label>{{ vinyl.name }}</label>
  <label>{{ vinyl.band }}</label>
  <label>{{ vinyl.genre }}</label>
  <label>{{ vinyl.price }}</label>
  </div>
  `
})
export class VinylComponent {
  @Input() vinyl: Vinyl;
}
