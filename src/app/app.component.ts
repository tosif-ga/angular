import { Component, AfterContentChecked } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {
  isLoggedIn;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }


  ngAfterContentChecked() {
    this.isLoggedIn = this.authenticationService.isLoggedIn;
  }
}
