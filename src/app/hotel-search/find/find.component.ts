import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HotelServiceService } from './../hotel-service.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  @Output() sendHoteis = new EventEmitter();

  searchForm = new FormGroup({
    dateCheckIn: new FormControl('',  Validators.required),
    dateCheckOut: new FormControl(''),
    title: new FormControl(''),
  });
  dateCheckIn: Date;
  dateCheckOut: Date;
  title: string;
  autocomplete: string[] = [];
  ptBr: any;

  constructor(private hotelServiceService: HotelServiceService) { }

  ngOnInit() {
    this.ptBr = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sext', 'Sáb'],
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sext', 'Sáb'],
      monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junio', 'Júlio', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'mm/dd/yy',
      weekHeader: 'Wk'
    };
  }


  onSubmit() {
    this.hotelServiceService.getHoteisSearch(this.searchForm.value).subscribe((res: any[]) => {
      this.sendHoteis.emit([res, this.searchForm.value]);
    });
  }

  search(event) {
    this.hotelServiceService.getHoteisAutocomplete(event.query).subscribe((res: any[]) => {
      let data = [];
      res.forEach(element => {
        data.push(element.title);
      });
      this.autocomplete = data;
    });
  }
}
