import { Component, computed, Input, OnInit, Output, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // title = 'demo-standalone';
  // counter = signal(0);

  // ngOnInit(){
  //   console.log(`counter: ${this.counter}`);
  // }
  // increment(){
  //   const value = this.counter() + 1;
  //   this.counter.set(value);
  // }
  // count = signal(10);

  // butter = computed(() => this.count() * 0.1);
  // sugar = computed(() => this.count() * 0.05);
  // flour = computed(() => this.count() * 0.2);
  // update(event: Event){
  //   const input = event.target as HTMLInputElement;
  //   this.count.set(parseInt(input.value));
  // }
  @Output() name = 'Svetlin';
  @Output() age = 52

  ngOnInit(): void {
    
  }

}
//bootstrapApplication(AppComponent)
