import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  
  token:any;

  constructor(private httpService : HttpService) {
    this.token = localStorage.getItem('token');
   }

   Notes(reqdata:any){
    console.log(this.token);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',

        'Authorization':'Bearer '+ this.token
      })
    }

    return this.httpService.postService('Notes/Create',reqdata,true,header);
  }
}
