import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'di-services';
  appUsers = [
    {name: 'Max', age: 31},
    {name: 'Anna', age: 30},
    {name: 'Chris', age: 29}
  ];

  handleClick(){
    this.title = 'Zdrastiii'
  }
}




// Standart console log

console.log(123);

// Monkey patching console log
const originalConsoleLog = console.log;







