import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteserviceService } from 'src/app/services/notesServices/noteservice.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {

  @Output() displaytogetallnotes=new EventEmitter<string>();
  
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
      this.notesArray = this.notesArray.filter((notedata:any)=>{
        return notedata.archive ===false;
      })
    })
  }

  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getAllNotes()
  }
  

}
