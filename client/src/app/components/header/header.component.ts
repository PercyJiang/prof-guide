import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SignUpComponent } from '../sign-up/sign-up.component'
import { LogInComponent } from '../log-in/log-in.component'

export interface DialogData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  signUp(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '300px',
      data: { username: this.username, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.username = result.username;
        this.password = result.password;
      }
    });
  }

  logIn(): void {
    const dialogRef = this.dialog.open(LogInComponent, {
      width: '300px',
      data: { username: this.username, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.username = result.username;
        this.password = result.password;
      }
    });
  }

}
