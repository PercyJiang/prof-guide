import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../model/Post';

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

  update(id: number, model: PostModel) {
    return this.http.put<PostModel>(server_url + 'api/post/' + id, model)
  }

  delete(id: number) {
    return this.http.delete(server_url + '/api/post/' + id)
  }


}