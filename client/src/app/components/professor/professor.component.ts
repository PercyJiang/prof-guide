import { Component, OnInit } from '@angular/core';
import { ProfessorModel } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/service/professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professorList!: ProfessorModel[]

  constructor(private profService: ProfessorService) { }

  ngOnInit(): void {
    this.profService.getAll().subscribe(data => { this.professorList = data })
  }

}
