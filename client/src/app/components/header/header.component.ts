import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { SignUpComponent } from '../sign-up/sign-up.component'
import { LogInComponent } from '../log-in/log-in.component'

import { UserModel } from '../../model/user'

import { UserService } from '../../service/user.service'

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

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '300px',
      data: { username: this.username, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        const model = new UserModel()
        model.username = result.username
        model.password = result.password
        this.userService.create(model).subscribe()
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
