import { OnInit, Component } from '@angular/core';
import { TasksService } from './../services/tasks.service';
import { Task } from '../models/Task';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayDialog: Boolean;
  task;
  selectedTask: Task;
  newTask: Boolean;
  tasks = [];
  cols: any;
  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.getTasks();
      this.cols = [
        { field: 'text', header: 'Task' },
        { field: 'completed', header: 'Completed'}
      ];
  }

  getTasks() {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  showDialogToAdd() {
    this.newTask = true;
    this.task = {};
    this.displayDialog = true;
  }

  save() {
    const tasks = [...this.tasks];
    if (this.newTask) {
      tasks.push(this.task);
      this.tasksService.addTask(this.task).subscribe((response) => {
        console.log(response);
        this.getTasks();
      });
    } else {
      this.tasksService.updateTask(this.task).subscribe((response) => {
        console.log(response);
        // console.log(this.task);
      });
      tasks[this.tasks.indexOf(this.selectedTask)] = this.task;
    }
    this.tasks = tasks;
    this.task = '';
    this.displayDialog = false;
  }

  delete() {
    const index = this.tasks.indexOf(this.selectedTask);
    this.tasks = this.tasks.filter((val, i) => i !== index);
    this.task = '';
    this.displayDialog = false;
    this.tasksService.deleteTask(this.selectedTask._id).subscribe((res) => {
      return this.getTasks();
    });
  }

  onRowSelect() {
    this.newTask = false;
    this.task = this.cloneTask();
    this.displayDialog = true;
    console.log(this.task);
  }

  cloneTask() {
    const task = Object.assign({}, this.selectedTask);
    return task;
  //   const task = {};
  //   for (const prop in t) {
  //     if (prop === 'text') {
  //       task[prop] = t[prop];
  //     } else {
  //       task[prop] = '';
  //     }
  //   }
  //   return task;
 }
}
