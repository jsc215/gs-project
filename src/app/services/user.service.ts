import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users', httpOptions);
  }

  addUser(newUser: User): Observable<User> {
    return this.http.post<User>('/api/users', newUser, httpOptions);
  }

  // updateUser(newUser: User): Observable<User> {
  //   return this.http.put<User>('users/' + newUser._id, newUser, httpOptions);
  // }

  // deleteUser(id) {
  //   return this.http.delete('users/' + id, httpOptions);
  // }
}
