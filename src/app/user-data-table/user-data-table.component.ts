import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrls: ['./user-data-table.component.css']
})
export class UserDataTableComponent implements OnInit {
  users: User[];
  cols: any[];

  constructor(private userService: UserService) {}

  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      // tslint:disable-next-line:no-shadowed-variable
      const user = Array.from((this.users = users['users'].map((user) => user)));
    });
  }

  ngOnInit() {
    this.getUsers();
    this.cols = [
      { field: 'FirstName', header: 'First Name' },
      { field: 'LastName', header: 'Last Name' },
      { field: 'OSofChoice', header: 'OS of Choice' },
      { field: 'Email', header: 'Email' }
    ];
  }
}
