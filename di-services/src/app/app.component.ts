import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleUser } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'di-services';
  appUsers: SimpleUser[] = [
    {name: 'Max', age: 31},
    {name: 'Anna', age: 30},
    {name: 'Chris', age: 29}
  ];

  handleClick(){
    this.title = 'Zdrastiii'
  }
  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){

    const user = {
      name: inputName.value, 
      age: Number(inputAge.value),
    };

    //this.appUsers.push(user);
    this.appUsers = [...this.appUsers, user];
    inputName.value = '';
    inputAge.value = '';
    
    console.log(this.appUsers);
    
  }
}




// // Standart console log

// console.log(123);

// // Monkey patching console log
//const originalConsoleLog = console.log;







