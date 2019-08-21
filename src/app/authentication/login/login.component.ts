import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userData: any;
  isLogin;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router,
              private spinner: NgxSpinnerService) {
    this.formLogin();
    this.isLogin = this.authenticationService.isLoggedIn();
    if (this.isLogin) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
  }

  formLogin() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.spinner.show();
    this.authenticationService.login(this.loginForm.value).subscribe(response => {
      this.userData = response;
      if (this.userData.success) {
        this.redirectUser(this.userData.data.user);
        this.spinner.hide();
      } else {
        console.log('else');
      }
    });
  }

  redirectUser(obj) {
    localStorage.setItem('currentUser', JSON.stringify(obj));
    this.router.navigate(['/dashboard']);
  }

}
