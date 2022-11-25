import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  


  gettoken(){
    return !!localStorage.getItem('token');
  }

  // canActivate():boolean{
  //   if (!this.Authguardservice.gettoken()) {  
  //     this.router.navigateByUrl('/login');  
  // }  
  // return this.Authguardservice.gettoken(); 
  // }
  
}
