import { Component, OnInit } from '@angular/core';
import { container, injectSymbols, TopArtistServ, SearchServ } from "core_cliente_spotify";
import { ModalTrackComponent } from '../modal-track/modal-track.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  public tracks: any[];

  public busqueda: string;

  constructor(private modalService: NgbModal) { }

  public ngOnInit() {
    const topArtistServ = container.get<TopArtistServ>(injectSymbols.M_MUSIC_LIST.TOP_ARTIST);
    topArtistServ.getTopArtist()
    .then((data) => {
      this.tracks = data.tracks;
    })
    .catch((err) => {
      alert(err.message);
    });
  }

  public buscar() {
    const searchServ = container.get<SearchServ>(injectSymbols.M_SEARCH.SEARCH);
    searchServ.search(this.busqueda)
    .then((data) => {
      this.tracks = data.tracks.items;
    })
    .catch((err) => {
      alert(err.message);
    });
  }

  public showInfo(track) {
    const modalRef = this.modalService.open(ModalTrackComponent);
    modalRef.componentInstance.track = track;
  }

}
