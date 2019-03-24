import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Task } from '../models/Task';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TasksService {
  baseURL = environment.baseURL;
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseURL}tasks`);
  }

  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseURL}tasks`, newTask, httpOptions);
  }

  updateTask(newTask: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.baseURL}tasks/${newTask._id}`, newTask, httpOptions);
  }
  deleteTask(_id) {
    const url = `${this.baseURL}tasks/${_id}`;
    return this.http.delete(url, httpOptions);
  }
}
