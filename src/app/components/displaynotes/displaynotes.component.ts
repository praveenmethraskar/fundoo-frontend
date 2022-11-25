
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(public dialog: MatDialog) { }


  @Input() NotesList: any;

  ngOnInit(): void {
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

}

