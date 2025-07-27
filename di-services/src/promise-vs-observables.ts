import { Observable } from "rxjs";


  // promises

  // Promise not lazy, code invoked
  const p = new Promise((resolve, reject) => {
    console.log('Promise has been initiated!');
    
    setTimeout(() => {
      resolve(1000);
    }, 3000);
  });

  p.then((data) =>console.log(data));

  // Synchronous analogy of promise 
  [1].map((n) => n * 2).map((x) => x * 100);

  // Observables
  // Sync Analogy

  [1, 2, 3, 4].map((n) => n * 2).map((x) => x * 100);

//   const o = new  Observable((observer) => {
//     observer.next(101);
//     observer.next(102);
//     observer.next(103);
//     observer.next(104);
//   });
//   o.subscribe((data) => { console.log('from observable:', data)});

//   const interval = (intervalValue: number) => {
//     const o = new  Observable<number>((observer) => {
//         let counter = 0;
//         setInterval(() => {
//             observer.next(counter++)
//         }, intervalValue)
//     });
//     return o;
//   };

//   interval(2000).subscribe((data) => {
//     console.log(data);
    
//   })


