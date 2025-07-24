import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'di-services';

  handleClick(){
    this.title = 'Zdrastiii'
  }
}
// Standart console log

console.log(123);

// Monkey patching console log
const originalConsoleLog = console.log;







