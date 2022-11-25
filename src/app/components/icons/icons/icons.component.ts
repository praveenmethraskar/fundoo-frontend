import { Component, Input, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/notesServices/noteservice.service';

@Component({
  selector: 'app-icons',
  exportAs: 'cdkMenuMenubarExample',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notesCard: any;
  data: any;
  noteid: any;
  isArchived: boolean = false;


  constructor(public notes: NoteserviceService) { }

  ngOnInit(): void {
  }

  colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#ffff00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },

  ];

  setColor(color:any){
    console.log('console',color);
    console.log(this.notesCard);

    this.notesCard.color=color;
    let data={
      color:color,
      noteId: [this.notesCard.noteid],
    }
    console.log(data);
    this.notes.changeColor(data).subscribe((response:any)=>{
      console.log(response);
    })
  }

  trash() {
    let data = {
      noteId: [this.notesCard.noteid],
      //noteId:this.noteid,
    }
    console.log(data);
    this.notes.trashnotes(data).subscribe((response: any) => {
      console.log(response);
    })
  }
  archieve() {
    let data = {
      noteId: [this.notesCard.noteid]
    }
    console.log(data);
    this.notes.archievenote(data).subscribe((response: any) => {
      console.log(response);
    })
  }


}
export class CdkMenuMenubarExample {}