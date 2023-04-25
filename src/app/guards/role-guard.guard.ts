import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ActiveToast } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }

  private isAuthorized(route: ActivatedRouteSnapshot): boolean
  {
    const roles = ['Admin', 'Seller'];
    const expectedRoles = route.data['expectedRoles'];

    const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1);

    return roleMatches >= 0 ? true : false; 
  }
  
}
