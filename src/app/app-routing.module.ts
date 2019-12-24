import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { HotelHomeComponent } from './hotel-search/hotel-home/hotel-home.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HotelReservationsComponent } from './hotel-search/hotel-reservations/hotel-reservations.component';

import { AuthGuard } from './authentication/_helpers';

const routes: Routes = [

  { path: '', component: HotelHomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegisterComponent },
  { path: 'reservas', component: HotelReservationsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
