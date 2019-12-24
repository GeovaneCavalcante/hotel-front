import { AuthenticationService } from './authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.authService.loginActive = true;
    }
  }


}
