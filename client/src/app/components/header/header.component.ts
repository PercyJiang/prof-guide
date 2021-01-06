import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SignUpComponent } from '../sign-up/sign-up.component'
import { LogInComponent } from '../log-in/log-in.component'

import { UserModel } from '../../model/user'

import { UserService } from '../../service/user.service'
import Swal from 'sweetalert2';

export interface SignUpDialogData {
  username: string;
  password: string;
}

export interface LogInDialogData {
  username: String;
  password: String;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn!: boolean

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = false
  }

  signUp(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '400px',
      data: { username: '', password: '' }
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
      width: '400px',
      data: { username: '', password: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.userService.getAll().subscribe(users => {
          for (let i in users) {
            if (result.username === users[i].username && result.password === users[i].password) {
              this.isLoggedIn = true
              Swal.fire({
                icon: 'success',
                title: 'Welcome!',
                text: 'Log In Successful'
              })
            }
          }
          if (!this.isLoggedIn) {
            Swal.fire({
              icon: 'error',
              title: 'Sorry!',
              text: 'Log In Failed'
            })
          }
        })
      }
    });
  }

}
