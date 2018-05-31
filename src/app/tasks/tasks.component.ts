import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayDialog: boolean;
  text: String;
  selectedTask: Task;
  completed: boolean;
  tasks: Task[];
  cols: any[];
  addTask;
  task;
  completedAt: null;
  taskList: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }
}
    // this.getTasks()
  // }

//   this.cols = [
//     { field: 'text',  header: 'Task' },
//     { field: 'completed', header: 'Completed' },
//     { field: 'completedAt', header: 'Completed At' }
//   ];


//   getTasks(){
//     this.tasksService().subscribe(tasks => {
//       this.tasks = tasks;
//     });
//   }
// }


//   // showDialogToAdd() {
//   //   this.addTask = true;
//   //   this.task = {};
//   //   this.displayDialog = true;
//   // }


//   // delete() {
//   //   let index = this.tasks.indexOf(this.selectedTask);
//   //   this.tasks = this.tasks.filter((val, i) => i !== index);
//   //   this.task = null;
//   //   this.displayDialog = false;
//   // }

//   // onRowSelect(event) {
//   //   this.addTask = false;
//   //   this.task = this.clonetask(event.data);
//   //   this.displayDialog = true
