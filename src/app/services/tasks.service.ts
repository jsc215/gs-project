import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Task } from '../models/Task';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class TasksService {
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('api/tasks', httpOptions);
  }

  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>('api/tasks', newTask, httpOptions);
    }

  updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`api/tasks/_id`, task, httpOptions);
    }
  }

