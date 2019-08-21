import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const flag = !!localStorage.getItem('currentUser');
    if (route.data.roleType) {
      const role = route.data.roleType.find(ele => ele === currentUser.userType);
      if (!role) {
        this.router.navigate(['/not-found']);
      }
    }
    if (!flag) {
      this.router.navigate(['']);
    }
    return flag;
  }
}
