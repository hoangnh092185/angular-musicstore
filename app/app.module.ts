import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { VinylListComponent } from './vinyl-list.component';
import { VinylComponent } from './vinyl.component';
import { EditVinylComponent } from './edit-vinyl.component';
import { NewVinylComponent } from './new-vinyl.component';
import { GenrePipe } from './genre.pipe'
import { BandPipe } from './band.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    VinylListComponent,
    VinylComponent,
    EditVinylComponent,
    NewVinylComponent,
    GenrePipe,
    BandPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
