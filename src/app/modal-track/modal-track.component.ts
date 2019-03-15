import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-track',
  templateUrl: './modal-track.component.html',
  styleUrls: ['./modal-track.component.css']
})
export class ModalTrackComponent implements OnInit {

  @Input() public track;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() { }

  dismiss() {
    this.activeModal.dismiss();
  }

  close() {
    this.activeModal.close();
  }

}
