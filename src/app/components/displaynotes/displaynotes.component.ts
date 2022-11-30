
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
import { UpdateComponent } from '../update/update/update.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {


  panelOpenState = false;
  show = false;

  submitted = false;
  titleImgOne = true;
  titleImgTwo = false;
  title: any;
  description: any;
  msg: any;
  searchword: any;
  subscription: any;
  message: any;

  constructor(public dialog: MatDialog,private data:DataServiceService) { }


  @Input() NotesList: any;
  @Output() displaytogetallnotes=new EventEmitter<string>();
  

  ngOnInit(): void {
    this.data.searchNote.subscribe((message:any )=> {
      this.message = message;
      console.log(message.data[0]);
      this.searchword = message.data[0]
    });
   
  }


  openDialog(notes: any) {
    const dialogReff = this.dialog.open(UpdateComponent, {
      width: '40%',
      panelClass: "updateDialog",
      data: notes
    });
    dialogReff.afterClosed().subscribe(result => {
      console.log('the dialog closed', result);
      
    })
  }

  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.msg = $event
    this.displaytogetallnotes.emit(this.msg)
  }


}

