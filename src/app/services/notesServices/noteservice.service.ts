import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  token: any;
  id: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  Notes(reqdata: any) {
    console.log(this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',

        'Authorization': 'Bearer ' + this.token
      })
    }

    return this.httpService.postService('Notes/Create', reqdata, true, header);
  }

  getAllNoteService() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',

        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('Notes/RetrieveAll', true, header);

  }

  updateNotes(data: any) {
    console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`Notes/Update?noteId=+${data.noteid}`, data, true, header);
  }

  trashnotes(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`Notes/Trash?noteId=${data.noteId}`, data, true, header);
  }
  archievenote(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`Notes/Archieve?noteId=${data.noteId}`, data, true, header);
  }

  changeColor(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`Notes/Color?noteId=${data.noteId}&color=${data.color}`, data, true, header);
  }

}
