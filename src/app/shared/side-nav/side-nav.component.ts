import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  currentUser;
  linkRouter: any;
  typeAdmin;
  typePM;
  typeSME;
  roleMenu = [];

  constructor(private sharedService: SharedServiceService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
  }

  ngOnInit() {
    this.getURL();
  }

  getURL() {
    this.sharedService.getroutrLink().subscribe(response => {
      this.linkRouter = response;
      if (this.linkRouter) {
        this.linkRouter.forEach(element => {
          element.roleType.forEach(elements => {
            if (this.currentUser.userType === elements) {
              this.roleMenu.push(element);
            }
          });
        });
      }
    });
  }

}
