import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button'
import { ToolbarModule } from 'primeng/toolbar';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

import { FindComponent } from './find/find.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelReservationsComponent } from './hotel-reservations/hotel-reservations.component';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';

import { HotelServiceService } from './hotel-service.service'

@NgModule({
  declarations: [
    FindComponent,
    HotelListComponent,
    HotelReservationsComponent,
    HotelHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,

    AccordionModule,
    ButtonModule,
    ToolbarModule,
    CalendarModule,
    AutoCompleteModule,
    CardModule,
    TableModule
  ],
  exports: [
    FindComponent,
    HotelListComponent,
    HotelReservationsComponent,
    HotelHomeComponent
  ],
  providers: [
    HotelServiceService
  ],
})
export class HotelSearchModule { }
