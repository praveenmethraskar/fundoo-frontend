
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }


}
 