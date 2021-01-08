import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server_url } from '../constants';
import { PostModel } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  create(model: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(server_url + '/api/post/create', model)
  }

  get(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(server_url + '/api/post/' + id)
  }

  getAll(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(server_url + '/api/post')
  }

  update(id: number, model: PostModel) {
    return this.http.put<PostModel>(server_url + '/api/post/' + id, model)
  }

  delete(id: number) {
    return this.http.delete(server_url + '/api/post/' + id)
  }


}
