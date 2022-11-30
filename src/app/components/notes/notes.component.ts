import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteserviceService } from 'src/app/services/notesServices/noteservice.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  panelOpenState = false; 
  show = false;
  notesForm!: FormGroup;

  submitted = false;
  titleImgOne = true;
  titleImgTwo = false;
  title: any;
  description: any;

  token:any;

  constructor(private formBuilder: FormBuilder, private notes:NoteserviceService, private snackbar:MatSnackBar) { 
    this.token = localStorage.getItem('token');
  }
  @Output() displaytogetallnotes=new EventEmitter<string>();

  ngOnInit(): void {
    this.notesForm = this.formBuilder.group({
      title: ['', Validators.required],
      discription: ['', Validators.required],
      acceptTerms: [true, Validators.requiredTrue]
  });
  }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.notesForm.valid) {
      let data = {
        title:this.notesForm.value.title,
        desciption:this.notesForm.value.discription
        //service:'advance'
      } 
      console.log(data);
      this.notes.Notes(data).subscribe((response:any) =>{
        console.log(response);
        this.displaytogetallnotes.emit(response)
      })
      this.snackbar.open("notes created",'',{duration: 3000});
    }

    console.log("hiding the description")
    this.show = !this.show;
    this.titleImgOne = true;
    this.titleImgTwo = false;
  }


  hideAndShow() {
    console.log("hiding the description")
    this.show = !this.show;
    this.titleImgOne = false;
    this.titleImgTwo = true;
  } 
 





}
