import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vinyl } from './vinyl.model';

@Component ({
  selector: 'edit-vinyl',
  template: `
    <div *ngIf="childSelectedVinyl" id="edit">
      <h1>Edit Vinyl</h1>
      <div>
       <label>Enter Vinyl Name:</label>
       <input [(ngModel)]="childSelectedVinyl.name">
      </div>
      <div>
       <label>Enter Vinyl Year Released:</label>
       <input [(ngModel)]="childSelectedVinyl.band">
      </div>
      <div>
       <label>Enter Vinyl Genre:</label>
       <input [(ngModel)]="childSelectedVinyl.genre">
      </div>
      <div>
       <label>Enter Vinyl Price:</label>
       <input [(ngModel)]="childSelectedVinyl.price">
      </div>
      <button (click)="doneClicked()">Done</button>
    </div>
  `

})

export class EditVinylComponent {
  @Input() childSelectedVinyl: Vinyl;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
