import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UsersService){

  }
  ngOnInit(): void {
    this.userService.getUsers(2).subscribe(user => {
      console.log(user);
      
    })
  }
}
