import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'

import * as jwt_decode from 'jwt-decode';
import { AuthenticationService } from './../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;

  loginForm: FormGroup;

  constructor(private authService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  onSubmit() {
    this.authService.login(this.loginForm.value)
      .toPromise()
      .then(res => {
        localStorage.setItem('token', res['accessToken']);
        localStorage.setItem('user', jwt_decode(res['accessToken']).sub);
        this.authService.loginActive = true;
        this.authService.currentUserSubject.next(res['accessToken']);
        this.router.navigate(['/']);
      })
      .catch(res => {
        this.error = 'Usuário inválido';

        console.log(res);
      });
  }

}
