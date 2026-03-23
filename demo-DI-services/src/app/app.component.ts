import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleUser } from './types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-DI-services';

  appUsers: SimpleUser[] = [
    { name: 'Petar Petrov', age: 21},
    { name: 'Ivan Ivanov', age: 31},
    { name: 'George Georgiev', age: 41},
    { name: 'Pavel Pavlov', age: 51},
  ];

  handleClick(){
    this.title = 'Svetlin'
  }

  addUser(){
    
  }
}
// Standart console log - simple


// Monkey patching console log - simple
