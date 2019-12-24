import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hotel-home',
  templateUrl: './hotel-home.component.html',
  styleUrls: ['./hotel-home.component.css']
})
export class HotelHomeComponent implements OnInit {

  @Output() receiveHotel = new EventEmitter();
  hoteis: Object[] = [];
  formData: Object[] = [];
  constructor() { }

  reciverHoteis(hoteis) {
    this.hoteis = hoteis[0];
    this.formData = hoteis[1];
  }

  ngOnInit() {
  }

}
