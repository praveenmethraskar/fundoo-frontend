import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;

  constructor(private httpService : HttpService) {
    this.token = localStorage.getItem('token');
   }

  LogIn(reqdata:any){
    //console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorisation':'token'
      })
    }

    return this.httpService.postService('User/Login',reqdata,false,header);
  }

  Registration(reqdata:any){

    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorisation':'token'
      })
    }
    return this.httpService.postService('User/Registration',reqdata,false,header);
  }

  ForgetPassword(reqdata:any){

    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorisation':'token'
      })
    }
    return this.httpService.postService('User/ForgetPassword?email='+(reqdata.email),reqdata,false,header);
  }

  Reset(reqdata:any,token:any){

    let header = {
      header:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':token
      })
    }
    return this.httpService.putService(`User/ResetPassword?newPassword=${reqdata.newPassword}&confirmPassword=${reqdata.confirmPassword}`,reqdata,true,header);
  }

}
 