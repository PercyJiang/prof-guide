import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfessorModel } from '../model/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  create(model: ProfessorModel): Observable<ProfessorModel> {
    return this.http.post<ProfessorModel>(server_url + '/api/prof/create', model)
  }

  get(id: number): Observable<ProfessorModel> {
    return this.http.get<ProfessorModel>(server_url + '/api/prof/get/' + id)
  }
}
