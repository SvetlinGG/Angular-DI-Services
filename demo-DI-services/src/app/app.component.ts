import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-DI-services';

  handleClick(){
    this.title = 'Svetlin'
  }
}
// Standart console log - simple


// Monkey patching console log - simple
