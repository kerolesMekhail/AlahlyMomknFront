import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServicesService } from './Services/login-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private login:LoginServicesService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("Token") != null && localStorage.getItem("Token") != undefined && localStorage.getItem("Token") != '')
    {
      console.log("Token",localStorage.getItem("Token"));
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
