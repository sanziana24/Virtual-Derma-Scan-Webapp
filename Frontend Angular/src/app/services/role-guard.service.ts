import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data["expectedRole"];
    const token = localStorage.getItem('role');
    if (expectedRole !== token) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
