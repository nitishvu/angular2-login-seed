import { Component, OnInit } from '@angular/core';

import { User } from '../shared/services/user/user';
import { UserService } from '../shared/services/user/user.service';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['../home-root/home-root.component.css', './users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(users => this.users = users);
  }

  onSelect(user: User) {
    if(user == this.selectedUser) {
      //this.selectedHero = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  title = 'Users Component';
}
