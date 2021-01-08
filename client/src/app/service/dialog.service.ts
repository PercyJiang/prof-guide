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

export interface LogInStatus { isLoggedIn: Boolean }

export interface LogInDialogData {
  username: String
  password: String
}

export interface SignUpDialogData {
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

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  logInStatus: LogInStatus = { isLoggedIn: false }

  constructor(
    private userService: UserService,
    private profService: ProfessorService,
    private postService: PostService,
  ) { }

  signUp(dialog: MatDialog): void {
    const dialogRef = dialog.open(SignUpComponent, {
      width: '400px',
      data: { username: '', password: '' }
    })
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
    })
  }

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

  formProf(dialog: MatDialog, id: number | null): void {
    if (this.logInStatus.isLoggedIn === false) {
      Swal.fire({ icon: 'error', title: 'You have to login first' })
      return
    }
    if (id === null) {
      const dialogRef = dialog.open(CreateProfessorComponent, {
        width: '400px',
        data: { profName: '', schoolName: '' }
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          const model = new ProfessorModel()
          model.profName = result.profName
          model.schoolName = result.schoolName
          this.profService.create(model).subscribe()
          Swal.fire({
            icon: 'success',
            title: 'Professor Create Success'
          }).then(() => window.location.reload())
        }
      })
    } else {
      this.profService.get(id).subscribe(result => {
        const dialogRef = dialog.open(CreateProfessorComponent, {
          width: '400px',
          data: result
        })
        dialogRef.afterClosed().subscribe(result => {
          if (result !== undefined) {
            const model = new ProfessorModel()
            model.profName = result.profName
            model.schoolName = result.schoolName
            model.posts = result.posts
            this.profService.update(id, model).subscribe()
            Swal.fire({
              icon: 'success',
              title: 'Professor Update Success'
            }).then(() => window.location.reload())
          }
        })
      })
    }

  }

  formPost(profId: number, dialog: MatDialog, postId: number | null): void {
    if (this.logInStatus.isLoggedIn === false) {
      Swal.fire({ icon: 'error', title: 'You have to login first' })
      return
    }
    if (postId === null) {
      const dialogRef = dialog.open(CreatePostComponent, {
        width: '400px',
        data: { schoolName: '', score: '', difficulty: '', comment: '' }
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.profService.get(profId).subscribe(prof => {
            const model = new PostModel()
            model.professor = prof
            model.score = result.score
            model.difficulty = result.difficulty
            model.comment = result.comment
            this.postService.create(model).subscribe()
            prof.posts?.push(model)
            this.profService.update(profId, prof)
            Swal.fire({
              icon: 'success',
              title: 'Post Create Success'
            }).then(() => window.location.reload())
          })
        }
      })
    } else {
      this.postService.get(postId).subscribe(result => {
        const dialogRef = dialog.open(CreatePostComponent, {
          width: '400px',
          data: result
        })
        dialogRef.afterClosed().subscribe(result => {
          if (result !== undefined) {
            this.profService.get(profId).subscribe(prof => {
              const model = new PostModel()
              model.professor = prof
              model.score = result.score
              model.difficulty = result.difficulty
              model.comment = result.comment
              this.postService.update(postId, model).subscribe()
              Swal.fire({
                icon: 'success',
                title: 'Post Update Success'
              }).then(() => window.location.reload())
            })
          }
        })
      })
    }
  }
}
