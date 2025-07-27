import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleUser, ComplexUser } from './types';
import { UserService } from './user-list/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'demo-app';
  isLoading = true;
  users: ComplexUser[] = [];


  constructor(private userService: UserService){
    this.users = this.userService.appUsers;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
  
      this.users = users;
    })
  }

  handleClick(){
    this.title = 'Zdrastiii';
  }

  addSimpleUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
    // Validate Input
    this.userService.addUser(inputName, inputAge);
  }
  
}




// // Standart console log

// console.log(123);

// // Monkey patching console log
//const originalConsoleLog = console.log;







