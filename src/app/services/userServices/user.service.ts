import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService) { }

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
  Regitration(){

    let header = {
      
    }
  }
}
