import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class UserService {
  baseURL = environment.baseURL;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}users`, httpOptions);
  }

  addUser(newUser: User): Observable<User> {
    return this.http.post<User>('/api/users', newUser, httpOptions);
  }
}
