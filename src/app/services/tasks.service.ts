import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Task } from '../models/Task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})

export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('api/tasks', httpOptions);
  }

  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>('api/tasks', newTask, httpOptions);
  }

  updateTask(newTask: Task): Observable<Task> {
    return this.http.patch<Task>(`api/tasks/${newTask._id}`, newTask, httpOptions);
  }
  deleteTask(_id) {
    const url = `api/tasks/${_id}`;
    return this.http.delete(url, httpOptions);
  }
}
