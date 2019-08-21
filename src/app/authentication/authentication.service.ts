import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConstants } from '../app.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  constructor(private http: HttpClient) {}

  login(userData) {
    const user = {
      email: userData.email,
      password: userData.password
    };
    return this.http
      .post(
        appConstants.baseUrl +
          appConstants.version +
          appConstants.api.auth.login,
        user
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  getData() {
    return this.http.get('/assets/fakedata/userData.json');
  }

  isLoggedIn() {
    return !!localStorage.getItem('currentUser');
  }
}
