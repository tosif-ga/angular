import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  constructor(private http: HttpClient) { }

  getroutrLink() {
    return this.http.get('/assets/fakedata/sidenav.json');
  }
}
