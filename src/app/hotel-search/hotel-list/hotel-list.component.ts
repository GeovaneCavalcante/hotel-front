import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { HotelServiceService } from './../hotel-service.service';
import { ReserveService } from './../reserve.service';

import { HotelModel } from '../hotel.model';
import { ReserveModel } from '../reserve.model';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  @Input() hoteis: any[] = [];
  @Input() formData: HotelModel;

  constructor(private hotelServiceService: HotelServiceService, private reserveService: ReserveService, private router: Router) {

  }

  ngOnInit() {
    this.hotelServiceService.getHoteis().subscribe((res: any[]) => {
      this.hoteis = res;
    });
  }

  addReserve(hotel: ReserveModel) {
    hotel.dateCheckIn = this.formData.dateCheckIn;
    hotel.dateCheckOut = this.formData.dateCheckOut;

    const startDay = new Date(this.formData.dateCheckIn);
    const endDay = new Date(this.formData.dateCheckOut);

    const days = (endDay.getTime() - startDay.getTime()) / 86400000;

    hotel.price = hotel.price * days;

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      this.router.navigate(['/login']);
    }
    const data = {
      startDateAvailable: this.formatDate(startDay),
      endDateAvailable: this.formatDate(endDay),
      value: hotel.price,
      hotel: { 'hotel_id': hotel.id },
      user: { 'user_id': user.id }
    }

    this.reserveService.updatedDataSelection(hotel);

    this.reserveService.reserve(data)
      .toPromise()
      .then(res => {

      })
      .catch(err => {
        console.log(err);
      });
    this.router.navigate(['/reservas']);
  }

  formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + (d.getDate() + 1);
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }


    return [year, month, day].join('-');
  }

}
