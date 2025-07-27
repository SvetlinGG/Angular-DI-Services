

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

