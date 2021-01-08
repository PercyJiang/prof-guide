import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostModel } from 'src/app/model/post';
import { ProfessorModel } from 'src/app/model/professor';
import { DialogService } from 'src/app/service/dialog.service';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() prof!: ProfessorModel

  postList!: PostModel[]

  constructor(
    private postService: PostService,
    public dialog: MatDialog,
    private dialogService: DialogService,
  ) {
    this.postService.getAll().subscribe(data => {
      this.postList = data
    })
  }

  ngOnInit(): void { }

  update(profId: number, postId: number): void { this.dialogService.formPost(profId, this.dialog, postId) }

  delete(id: number): void {
    Swal.fire({
      icon: 'question',
      title: 'Are you sure about this?',
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.postService.delete(id).subscribe()
        window.location.reload()
      }
    })
  }

}
