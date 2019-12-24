import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationsComponent } from './hotel-reservations.component';

describe('HotelReservationsComponent', () => {
  let component: HotelReservationsComponent;
  let fixture: ComponentFixture<HotelReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
