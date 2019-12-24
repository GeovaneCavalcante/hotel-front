import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: String;

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirme: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    let valide = this.validate();
    if (valide) {
      this.error = valide;
      return true;
    }

    this.authService.register(this.registerForm.value)
      .toPromise()
      .then(res => {
        console.log(res)
        this.router.navigate(['/login']);
      })
      .catch(res => {
        console.log(res);
        if (typeof res.error == 'object'){
          this.error = res.error.errors[0].defaultMessage;
        }else{
          this.error = res.error;
        }

      })
  }

  validate() {

    if (this.registerForm.value.password != this.registerForm.value.passwordConfirme) {
      return "Senhas diferentes!";
    } else {
      return false;
    }
  }

}
