import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/notesServices/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  token:any;
  notesArray:any;
  noteData:any;
  message:any;
  public subscription:any;

  constructor(private notes:NoteserviceService) { 
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(){
    this.notes.getAllNoteService().subscribe((request:any)=> {
      console.log("request data", request);
      this.notesArray = request.data;
      console.log(this.notesArray);

    })
  }
}
