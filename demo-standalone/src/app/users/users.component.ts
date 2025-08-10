import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from './users.service';
import { User } from '../types/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UsersService, private router: Router){}

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers():void {
    this.userService.getUsers().subscribe(users => {

      this.users = users;
    })
  }
}
