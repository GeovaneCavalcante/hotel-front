import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor(private httpClient: HttpClient) { }

  getHoteis() {
    return this.httpClient.get(config.apiUrl + '/api/hoteis');
  }

  getHoteisSearch(data) {
    return this.httpClient.get(config.apiUrl + '/api/hoteis?title=' + data.title + '&startDateAvailable=' + this.formatDate(data.dateCheckIn) + '&endDateAvailable=' + this.formatDate(data.dateCheckOut)+'');
  }

  getHoteisAutocomplete(value) {
    return this.httpClient.get(config.apiUrl + '/api/hoteis?title=' + value);
  }

  formatDate(date) {
    var d = date,
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}
