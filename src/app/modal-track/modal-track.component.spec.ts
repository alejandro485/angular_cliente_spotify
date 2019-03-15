import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrackComponent } from './modal-track.component';

describe('ModalTrackComponent', () => {
  let component: ModalTrackComponent;
  let fixture: ComponentFixture<ModalTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
