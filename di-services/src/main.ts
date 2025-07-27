import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  // promises
  const p = new Promise((resolve, reject) => {
    console.log('Promise has been initiated!');
    
    setTimeout(() => {
      resolve(1000);
    }, 3000);
  });

  p.then((data) =>console.log(data));

  // Synchronous analogy of promise 
  [1].map((n) => n * 2).map((x) => x * 100);