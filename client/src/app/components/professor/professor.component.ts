import { Component, OnInit } from '@angular/core';
import { ProfessorModel } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/service/professor.service';
import { MatDialog } from '@angular/material/dialog';

import { DialogService } from '../../service/dialog.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professorList!: ProfessorModel[]

  constructor(
    public dialog: MatDialog,
    private dialogService: DialogService,
    private profService: ProfessorService,
  ) {
    this.profService.getAll().subscribe(data => this.professorList = data)
  }

  ngOnInit(): void { }

  unixToDate(unix: any): string {
    let date: Date = new Date(unix * 1000)
    return date.getFullYear() + '/' + date.getMonth() + 1 + '/' + date.getDate()
  }

  createPost(profId: number): void { this.dialogService.formPost(profId, this.dialog, null) }

  update(id: number): void { this.dialogService.formProf(this.dialog, id) }

  delete(id: number): void {
    Swal.fire({
      icon: 'question',
      title: 'Are you sure about this?',
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.profService.delete(id).subscribe()
        window.location.reload()
      }
    })
  }

}
