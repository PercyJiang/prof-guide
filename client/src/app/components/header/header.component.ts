import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { SignUpComponent } from '../sign-up/sign-up.component'
import { LogInComponent } from '../log-in/log-in.component'
import { CreateProfessorComponent } from '../create-professor/create-professor.component';
import { CreatePostComponent } from '../create-post/create-post.component';

import { UserModel } from '../../model/user'
import { ProfessorModel } from '../../model/professor'
import { PostModel } from '../../model/post'

import { UserService } from '../../service/user.service'
import { ProfessorService } from '../../service/professor.service'
import { PostService } from '../../service/post.service'

export interface SignUpDialogData {
  username: string;
  password: string;
}

export interface LogInDialogData {
  username: String;
  password: String;
}

export interface CreateProfDialogData {
  profName: String;
  schoolName: String;
}

export interface CreatePostDialogData {
  profName: String;
  schoolName: String;
  score: Number;
  difficulty: Number;
  comment: String;
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
    private userService: UserService,
    private profService: ProfessorService,
    private postService: PostService
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
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful'
        })
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
                title: 'Log In Successful'
              })
            }
          }
          if (!this.isLoggedIn) {
            Swal.fire({
              icon: 'error',
              title: 'Log In Failed'
            })
          }
        })
      }
    });
  }

  logOut(): void {
    this.isLoggedIn = false
    Swal.fire({
      icon: 'success',
      title: 'Log Out Successful'
    })
  }

  createProfessor(): void {
    const dialogRef = this.dialog.open(CreateProfessorComponent, {
      width: '400px',
      data: { profName: '', schoolName: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        Swal.fire({
          icon: 'success',
          title: 'Professor Create Success'
        })
        const model = new ProfessorModel()
        model.profName = result.profName
        model.schoolName = result.schoolName
        this.profService.create(model).subscribe()
      }
    })
  }

  createPost(): void {
    const dialogRef = this.dialog.open(CreatePostComponent, {
      width: '400px',
      data: { profName: '', schoolName: '', score: '', difficulty: '', comment: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        Swal.fire({
          icon: 'success',
          title: 'Post Create Success'
        })
        const model = new PostModel()
        model.score = result.score
        model.difficulty = result.difficulty
        model.comment = result.comment
        this.postService.create(model).subscribe()
      }
    })
  }

}
