import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server_url } from '../constants';
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
    return this.http.get<ProfessorModel>(server_url + '/api/prof/' + id)
  }

  getAll(): Observable<ProfessorModel[]> {
    return this.http.get<ProfessorModel[]>(server_url + '/api/prof')
  }

  update(id: number, model: ProfessorModel) {
    return this.http.put<ProfessorModel>(server_url + '/api/prof/' + id, model)
  }

  delete(id: number) {
    return this.http.delete(server_url + '/api/prof/' + id)
  }
}
