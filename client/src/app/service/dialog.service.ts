import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { SignUpComponent } from '../components/sign-up/sign-up.component'
import { LogInComponent } from '../components/log-in/log-in.component'
import { CreateProfessorComponent } from '../components/create-professor/create-professor.component';
import { CreatePostComponent } from '../components/create-post/create-post.component';

import { UserModel } from '../model/user'
import { ProfessorModel } from '../model/professor'
import { PostModel } from '../model/post'

import { UserService } from './user.service'
import { ProfessorService } from './professor.service'
import { PostService } from './post.service'
import { Subject } from 'rxjs';

export interface LogInStatus {
  isLoggedIn: Boolean
}

export interface LogInDialogData {
  username: String
  password: String
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  logInStatus: LogInStatus = { isLoggedIn: false }

  constructor(
    private userService: UserService,
    private profService: ProfessorService,
    private postService: PostService
  ) { }

  isLoggedInChange: Subject<Boolean> = new Subject<Boolean>()

  logIn(dialog: MatDialog): void {
    const dialogRef = dialog.open(LogInComponent, {
      width: '400px',
      data: { username: '', password: '' }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.userService.getAll().subscribe(users => {
          for (let i in users) {
            if (result.username === users[i].username && result.password === users[i].password) {
              Swal.fire({
                icon: 'success',
                title: 'Log In Successful'
              })
              this.logInStatus.isLoggedIn = true
            }
          }
          if (!this.logInStatus.isLoggedIn) {
            Swal.fire({
              icon: 'error',
              title: 'Log In Failed'
            })
          }
        })
      }
    })
  }
}
