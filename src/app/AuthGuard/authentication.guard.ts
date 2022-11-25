import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../services/authguardService/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  //constructor(private Authguardservice:AuthguardServiceService,private router:Router){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  // canActivate():boolean
  // {
  //   return true;
  // }
  constructor(private Authguardservice:AuthguardServiceService, private router:Router ) { }

  canActivate():boolean{
  if (!this.Authguardservice.gettoken()) {  
     this.router.navigateByUrl('/login');  
   }  
   return this.Authguardservice.gettoken(); 
 }
  
}
