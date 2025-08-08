import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-standalone';
  counter = signal(0);

  ngOnInit(){
    console.log(`counter: ${this.counter}`);
    

  }

  increment(){
    const value = this.counter() + 1;
    this.counter.set(value);
  }
}
