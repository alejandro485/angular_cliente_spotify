import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { MusicListComponent } from './music-list/music-list.component';
import { ModalTrackComponent } from './modal-track/modal-track.component';
import { Ms2minutePipe } from './ms2minute.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    ModalTrackComponent,
    Ms2minutePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalTrackComponent ]
})
export class AppModule { }
