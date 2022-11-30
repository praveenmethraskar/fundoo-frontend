import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, _closeDialogVia } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteserviceService } from 'src/app/services/notesServices/noteservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;
  id:any;

  token:any;

  constructor(
    private notes:NoteserviceService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private snackbar:MatSnackBar) {
    this.title=data.title;
    this.description=data.desciption;
    this.id=data.noteid;
   }

   onNoClick():void{
    this.dialogRef.close();
   }

   ngOnInit(): void {  }


  closeDialog(){
    let payload = {
      title:this.title,
      desciption:this.description,
      noteid:this.id
    } 
    console.log(payload);
    this.notes.updateNotes(payload).subscribe((response:any) =>{
      console.log(response);
      this.dialogRef.close(response);
    })
    this.dialogRef.close();
    let snackbar = this.snackbar.open("Note Updated",'',{duration: 3000});
  }

}
