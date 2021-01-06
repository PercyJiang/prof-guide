import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user';
import { Observable } from 'rxjs';
import { server_url } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  hello(): Observable<String> {
    return this.http.get<String>(server_url + '/api/user/hello')
  }

  create(userModel: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(server_url + '/api/user/create', userModel)
  }

  get(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(server_url + '/api/user/' + id)
  }

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(server_url + '/api/user')
  }
}
