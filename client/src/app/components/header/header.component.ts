import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { DialogService, LogInStatus } from '../../service/dialog.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logInStatus!: LogInStatus

  constructor(
    public dialog: MatDialog,
    private dialogService: DialogService,
  ) {
    this.logInStatus = dialogService.logInStatus
  }

  ngOnInit(): void { }

  logOut(): void {
    this.logInStatus.isLoggedIn = false
    Swal.fire({
      icon: 'success',
      title: 'Log Out Successful'
    })
  }

  signUp(): void { this.dialogService.signUp(this.dialog) }

  logIn(): void { this.dialogService.logIn(this.dialog) }

  createProfessor(): void { this.dialogService.createProfessor(this.dialog) }

}
