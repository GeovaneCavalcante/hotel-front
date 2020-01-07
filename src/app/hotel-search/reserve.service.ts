import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { ReserveModel } from './reserve.model';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  private dataSource = new BehaviorSubject(new ReserveModel());
  data = this.dataSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  updatedDataSelection(data: ReserveModel) {
    this.dataSource.next(data);
  }

  reserve(data) {

    return this.httpClient.post(config.apiUrl + '/api/reservations', data, { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem('token') } });
  }


  getReservations() {

    let user = JSON.parse(localStorage.getItem('user'));

    return this.httpClient.get(config.apiUrl + '/api/reservations/user/' + user.id, { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem('token') } });
  }
}
