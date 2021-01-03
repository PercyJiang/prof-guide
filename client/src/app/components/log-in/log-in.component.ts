import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from '../header/header.component'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() {}

  // constructor(
  //   public dialogRef: MatDialogRef<LogInComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData
  // ) { }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  ngOnInit(): void {
  }

}
