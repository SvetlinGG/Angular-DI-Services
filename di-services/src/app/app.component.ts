import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleUser } from './types';
import { UserService } from './user-list/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'di-services';

  users: SimpleUser[] = []


  constructor(private userService: UserService){
    this.users = this.userService.appUsers;
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







