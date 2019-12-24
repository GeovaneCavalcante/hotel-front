import { ReserveService } from './../reserve.service';
import { Component, OnInit } from '@angular/core';
import { ReserveModel } from '../reserve.model';

@Component({
  selector: 'app-hotel-reservations',
  templateUrl: './hotel-reservations.component.html',
  styleUrls: ['./hotel-reservations.component.css']
})
export class HotelReservationsComponent implements OnInit {

  reservations: any = [];

  constructor(private reserveService: ReserveService) { }

  ngOnInit() {
    this.reserveService.getReservations()
    .toPromise()
    .then(res => {
      this.reservations = res;
    })
    .catch(err =>{
      console.log(err)
    })
   
  }

}
